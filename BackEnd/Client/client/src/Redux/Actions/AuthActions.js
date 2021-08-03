import { PostData, GetData } from "./../../Tools/APICalls"
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
      console.log(err);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response.data.message,
          type: "REGISTER",
        },
      });
    });
};

export const Login = (data) => async (dispatch) => {
  console.log(data);
  await PostData("login", data)
    .then((res) => {
      console.log(res);
      dispatch({ type: AUTHTYPES.LOGIN_SUCCED, payload: res.data });
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: true, msg: err.response.data.message, type: "LOGIN" },
      });
    });
};