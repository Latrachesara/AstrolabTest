import { PostData, GetData } from "./../../Tools/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { PRODUCTTYPS } from "../Reducer/ProductReducer";

export const CreateProduct = (data) => async (dispatch) => {
  await PostData(`create/product`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: PRODUCTTYPS.CREATE_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "PRODUCTCREATION",
        },
      });
    });
};

export const GetAllProduct = (id) => async (dispatch) => {
  await GetData(`get/product/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: PRODUCTTYPS.GET_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "FETCHING_PRODUCT",
        },
      });
    });
};
export const getAllProduct = () => async (dispatch) => {
  await GetData("get/AllProduct")
    .then((res) => {
      dispatch({ type: PRODUCTTYPS.GET_ALL_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "FETCHING_PRODUCT",
        },
      });
    });
};
export const GetProdcutByWishList = (id) => async (dispatch) => {
  await GetData(`getProductByWishListID/${id}`).then((res) => {
    dispatch({ type: PRODUCTTYPS.SELECT_PRODUCT, payload: res.data });
  });
};