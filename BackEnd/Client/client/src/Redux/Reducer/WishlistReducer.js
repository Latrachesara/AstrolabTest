const InisitalState = {
  Wishlist: [],
};
export const WISHLISTTYPES = {
  CREATE_WISHLIST: "CREATE_WISHLIST",
  GET_WISHLIST: "GET_WISHLIST",
};
const WishlistReducer = (state = InisitalState, action) => {
  switch (action.type) {
    case WISHLISTTYPES.CREATE_WISHLIST:
      return {
        ...state,
        Wishlist: [action.payload, ...state.Wishlist],
      };
    case WISHLISTTYPES.GET_WISHLIST:
      return {
        ...state,
        Wishlist: action.payload,
      };
    default:
      return state;
  }
};
export default WishlistReducer;