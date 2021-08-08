import { GLOBALTYPES } from "./GlobalType";
export const ChangeCurrency = (data) => (dispatch) => {
  dispatch({ type: GLOBALTYPES.CURRENCY, payload: data });
};