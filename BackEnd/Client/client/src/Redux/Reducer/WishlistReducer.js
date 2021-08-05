const InisitalState = {
  Wishlist: {},
  Name: {},
};
export const WISHLISTTYPES = {
  CREATE_WISHLIST: "CREATE_WISHLIST",
};
const WishlistReducer = (state = InisitalState, action) => {
  switch (action.type) {
    case WISHLISTTYPES.CREATE_WISHLIST:
      return {};
    default:
      return state;
  }
};
export default WishlistReducer;
