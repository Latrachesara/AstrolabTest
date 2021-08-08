import { GLOBALTYPES } from "./../Actions/GlobalType";
const inistialState = {
  currency: null
};
const CurrencyReducer = (state = inistialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
};
export default CurrencyReducer;