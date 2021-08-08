import {
  PostData,
  GetData,
  DeleteData,
  UpdateData
} from "./../../Tools/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { WISHLISTTYPES } from "./../Reducer/WishlistReducer";

export const CreateWishlist = (data) => async (dispatch) => {
  await PostData("creation/wishlist", data)
    .then((res) => {
      dispatch({ type: WISHLISTTYPES.CREATE_WISHLIST, payload: res.data });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: false,
          msg: "Wish List Created !",
          type: "CREAT_WISHLIST"
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "WISHLISTCREATION"
        }
      });
    });
};
export const GettAllWishList = () => async (dispatch) => {
  await GetData("gatAll/allWishlist")
    .then((res) => {
      dispatch({
        type: WISHLISTTYPES.SELET_WISHLIST,
        payload: res.data[0]._id
      });
      dispatch({ type: WISHLISTTYPES.GET_WISHLIST, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "FETCHING_WISHLIST"
        }
      });
    });
};
export const SelectWishList = (id) => async (dispatch) => {
  dispatch({ type: WISHLISTTYPES.SELET_WISHLIST, payload: id });
};
export const DeleteWishList = (id) => async (dispatch) => {
  console.log(id);
  await DeleteData(`delete/wishlist/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: WISHLISTTYPES.DELET_WISHLIST, payload: id });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: false,
          msg: "Wish List deleted ! ",
          type: "DELETED_WISHLIST"
        }
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export const updateWishList = (data, id) => async (dispatch) => {
  console.log(data);
  await UpdateData(`update/wishlist/${id}`, { name: data }).then((res) => {
    console.log(res.data);
    dispatch({
      type: WISHLISTTYPES.UPDATE_WISHLIST,
      payload: { data: res.data, id }
    });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: false,
        msg: "Wish List updated ! ",
        type: "UPDATE_WISHLIST"
      }
    });
  });
};