const InisitalState = {
    Products: [],
    Selected: [],
    SelectedOne: {},
  };
  export const PRODUCTTYPS = {
    CREATE_PRODUCT: "CREATE_PRODUCT",
    GET_PRODUCT: "GET_PRODUCT",
    GET_ALL_PRODUCT: "GET_ALL_PRODUCT",
    SELECT_PRODUCT: "SELECT_PRODUCT",
    SELECT_ONE: "SELECT_ONE",
  };
  const ProductReducer = (state = InisitalState, action) => {
    switch (action.type) {
      case PRODUCTTYPS.CREATE_PRODUCT:
        return {
          ...state,
          Products: [action.payload, ...state.Products],
        };
      case PRODUCTTYPS.GET_PRODUCT:
        return {
          ...state,
          SelectedOne: action.payload,
        };
      case PRODUCTTYPS.GET_ALL_PRODUCT:
        return {
          ...state,
          Products: action.payload,
        };
      case PRODUCTTYPS.SELECT_PRODUCT:
        return {
          ...state,
          Selected: action.payload,
        };
      case PRODUCTTYPS.SELECT_ONE:
        return {
          ...state,
          SelectedOne: action.payload,
        };
      default:
        return state;
    }
  };
  export default ProductReducer;