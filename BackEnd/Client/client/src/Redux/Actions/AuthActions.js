import { PostData, GetData } from "./../../Tools/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { AUTHTYPES } from "./../Reducer/AuthReducer";

export const register = (UserData) => async (dispatch) => {
  console.log("this is the data in the actions :", UserData);
  await PostData("register", UserData)
    .then((res) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: false, msg: res.data.message },
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "REGISTER",
        },
      });
    });
};

export const Login = (data, history) => async (dispatch) => {
  console.log(data);
  await PostData("login", data)
    .then((res) => {
      console.log(res);
      history.push("/");
      dispatch({ type: AUTHTYPES.LOGIN_SUCCED, payload: res.data });
      dispatch({ type: GLOBALTYPES.LOADING_ON });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "LOGIN",
        },
      });
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
    });
};

export const VerifIsLoggedIn = () => async (dispatch) => {
  await GetData("VerifiLoggedIn")
    .then((res) => {
      console.log(res);
      dispatch({ type: AUTHTYPES.LOGGEDIN, payload: res.data });
      dispatch({ type: GLOBALTYPES.LOADING_ON });
    })
    .catch((err) => {
      dispatch({
        type: AUTHTYPES.NOTLOGGED,
        payload: { msg: err.response?.data?.message },
      });
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
    });
};
export const Logout = () => async (dispatch) => {
  console.log("logout action");
  await PostData("logout").then((res) => {
    console.log(res);

    dispatch({
      type: GLOBALTYPES.LOGOUT,
    });
  });
};
