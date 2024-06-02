import { Types } from "../actionType";
import { client } from "../../network";

export const addToCartAction = (product) => ({
  type: Types.ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeFromCartAction = (product) => ({
  type: Types.REMOVE_PRODUCT_FROM_CART,
  payload: product,
});

export const updateProdQuantityAction = (product, quantity) => ({
  type: Types.UPDATE_PRODUCT_QUANTITY,
  payload: {id: product.id, quantity},
});

export const addToCart = (productDetail) => (dispatch) => {
  return new Promise((resolve, reject) => {
    client
    .post('carts/add')
    .then(res => {
      dispatch(addToCartAction(JSON.stringify(res)));
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  })
}