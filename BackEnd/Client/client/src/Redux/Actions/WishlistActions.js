import { PostData, GetData } from "./../../Tools/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { WISHLISTTYPES  } from "./../Reducer/WishlistReducer";

export const CreateWishlist = (data) => async (dispatch) => {
  await PostData(`/creation/wishlist`, data)
    .then((res) => {
      dispatch({ type: WISHLISTTYPES .CREATE_WISHLIST, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response.data.message,
          type: "WISHLISTCREATION",
        },
      });
    });
};