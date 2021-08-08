import { DeleteData, EditData } from "../Actions/GlobalType";

const InisitalState = {
  Wishlist: [],
  SelectedWishList: ""
};
export const WISHLISTTYPES = {
  CREATE_WISHLIST: "CREATE_WISHLIST",
  GET_WISHLIST: "GET_WISHLIST",
  SELET_WISHLIST: "SELECT_WISHLIST",
  DELET_WISHLIST: "DELETE_WISHLIST",
  UPDATE_WISHLIST: "UPDATE_WISHLIST"
};
const WishlistReducer = (state = InisitalState, action) => {
  switch (action.type) {
    case WISHLISTTYPES.CREATE_WISHLIST:
      return {
        ...state,
        Wishlist: [action.payload, ...state.Wishlist]
      };
    case WISHLISTTYPES.GET_WISHLIST:
      return {
        ...state,
        Wishlist: action.payload
      };
    case WISHLISTTYPES.SELET_WISHLIST:
      return {
        ...state,
        SelectedWishList: action.payload
      };
    case WISHLISTTYPES.DELET_WISHLIST:
      return {
        ...state,
        Wishlist: DeleteData(state.Wishlist, action.payload)
      };
    case WISHLISTTYPES.UPDATE_WISHLIST:
      return {
        ...state,
        Wishlist: EditData(
          state.Wishlist,
          action.payload.id,
          action.payload.data
        )
      };
    default:
      return state;
  }
};
export default WishlistReducer;