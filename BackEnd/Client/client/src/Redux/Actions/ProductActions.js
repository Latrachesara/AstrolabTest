import {
  PostData,
  GetData,
  DeleteData,
  UpdateData
} from "./../../Tools/APICalls";
import { GLOBALTYPES } from "./GlobalType";
import { PRODUCTTYPS } from "../Reducer/ProductReducer";

export const CreateProduct = (data) => async (dispatch) => {
  await PostData(`create/product`, data)
    .then((res) => {
      dispatch({ type: PRODUCTTYPS.CREATE_PRODUCT, payload: res.data });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: false,
          msg: "Product Created !",
          type: "CREATE_PRODUCT"
        }
      });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "PRODUCTCREATION"
        }
      });
    });
};

export const GetProductById = (id) => async (dispatch) => {
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
          type: "FETCHING_PRODUCT"
        }
      });
    });
};
export const getAllProduct = () => async (dispatch) => {
  await GetData("get/AllProduct")
    .then((res) => {
      dispatch({ type: PRODUCTTYPS.GET_PRODUCT, payload: res.data[0] });
      dispatch({ type: PRODUCTTYPS.GET_ALL_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: true,
          msg: err.response?.data?.message,
          type: "FETCHING_PRODUCT"
        }
      });
    });
};
export const GetProdcutByWishList = (id) => async (dispatch) => {
  await GetData(`getProductByWishListID/${id}`).then((res) => {
    dispatch({ type: PRODUCTTYPS.SELECT_PRODUCT, payload: res.data });
  });
};
export const DeleteProduct = (id) => async (dispatch) => {
  console.log(id);
  await DeleteData(`delete/product/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: PRODUCTTYPS.DELETE_PRODUCT, payload: id });
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: false,
          msg: "Wish List deleted ! ",
          type: "DELETED_PRODUCT"
        }
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};
export const updateProduct = (data, id) => async (dispatch) => {
  await UpdateData(`update/product/${id}`, data).then((res) => {
    console.log(res.data);
    dispatch({
      type: PRODUCTTYPS.UPDATE_PRODUCT,
      payload: { data: res.data, id }
    });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: false,
        msg: "Wish List updated ! ",
        type: "UPDATE_PRODUCT"
      }
    });
  });
};