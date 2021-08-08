import { combineReducers } from "redux";
import alert from "./AlertReducer";
import Auth from "./AuthReducer";
import Loading from "./LoadingReducer";
import Wishlist from "./WishlistReducer";
import Product from "./ProductReducer";
import Currency from "./CurrencyReducer";
export default combineReducers({
  alert,
  Auth,
  Loading,
  Wishlist,
  Product,
  Currency
});