import { combineReducers } from "redux";
import alert from "./AlertReducer";
import Auth from "./AuthReducer";

export default combineReducers({
  alert,
  Auth, 
});