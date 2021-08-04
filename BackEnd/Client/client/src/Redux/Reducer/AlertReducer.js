import { GLOBALTYPES } from "./../Actions/GlobalType";
const inistialState = {
  error: null,
  msg: "",
  type: "",
};
const AlertReducer = (state = inistialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return {
        ...state,
        error: action.payload.error,
        msg: action.payload.msg,
        type: action.payload.type,
      };
    default:
      return state;
  }
};
export default AlertReducer;
