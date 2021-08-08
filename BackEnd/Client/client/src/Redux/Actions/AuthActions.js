import { PostData, GetData } from "./../../Tools/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { AUTHTYPES } from "./../Reducer/AuthReducer";
import { json } from "express";

export const register = (UserData) => async (dispatch) => {
  dispatch({ type: GLOBALTYPES.LOADING_ON });
  await PostData("register", UserData)
    .then((res) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: false, msg: res.data.message },
      });
      dispatch({ type: GLOBALTYPES.LOADING_OFF });

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
      dispatch({ type: GLOBALTYPES.LOADING_OFF });

    });
};

export const Login = (data, history) => async (dispatch) => {
  dispatch({ type: GLOBALTYPES.LOADING_ON });
  await PostData("login", data)
    .then((res) => {
      console.log(res);
      history.push("/");
      dispatch({ type: AUTHTYPES.LOGIN_SUCCED, payload: res.data });
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
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
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
      dispatch({ type: AUTHTYPES.LOGGEDIN, payload: res.data });
     
    })
    .catch((err) => {
      dispatch({ type: GLOBALTYPES.LOADING_OFF });
      dispatch({
        type: AUTHTYPES.NOTLOGGED,
        payload: { msg: err.response?.data?.message },
      });
     
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