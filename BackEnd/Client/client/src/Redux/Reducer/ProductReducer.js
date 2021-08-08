import { DeleteData, EditData } from "../Actions/GlobalType";

const InisitalState = {
  Products: [],
  Selected: [],
  SelectedOne: {}
};
export const PRODUCTTYPS = {
  CREATE_PRODUCT: "CREATE_PRODUCT",
  GET_PRODUCT: "GET_PRODUCT",
  GET_ALL_PRODUCT: "GET_ALL_PRODUCT",
  SELECT_PRODUCT: "SELECT_PRODUCT",
  SELECT_ONE: "SELECT_ONE",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT"
};
const ProductReducer = (state = InisitalState, action) => {
  switch (action.type) {
    case PRODUCTTYPS.CREATE_PRODUCT:
      return {
        ...state,
        Products: [action.payload, ...state.Products]
      };
    case PRODUCTTYPS.GET_PRODUCT:
      return {
        ...state,
        SelectedOne: action.payload
      };
    case PRODUCTTYPS.GET_ALL_PRODUCT:
      return {
        ...state,
        Products: action.payload
      };
    case PRODUCTTYPS.SELECT_PRODUCT:
      return {
        ...state,
        Selected: action.payload
      };
    case PRODUCTTYPS.SELECT_ONE:
      return {
        ...state,
        SelectedOne: action.payload
      };
    case PRODUCTTYPS.DELETE_PRODUCT:
      return {
        ...state,
        Products: DeleteData(state.Products, action.payload),
        SelectedOne: {}
      };
    case PRODUCTTYPS.UPDATE_PRODUCT:
      return {
        ...state,
        Products: EditData(
          state.Products,
          action.payload.id,
          action.payload.data
        ),
        SelectedOne: action.payload.data
      };
    default:
      return state;
  }
};
export default ProductReducer;