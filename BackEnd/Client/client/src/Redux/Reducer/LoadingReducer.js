import { GLOBALTYPES } from "./../Actions/GlobalType";
const inistialState = {
  Loading: false,
};

const alertReducer = (state = inistialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.LOADING_ON:
      return {
        Loading: true,
      };
    case GLOBALTYPES.LOADING_OFF:
      return {
        Loading: false,
      };
    default:
      return state;
  }
};
export default alertReducer;