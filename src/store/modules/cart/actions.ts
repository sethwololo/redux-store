/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  ADD_PRODUCT_TO_CART_REQUEST,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAILIURE,
  IProduct,
} from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ADD_PRODUCT_TO_CART_SUCCESS,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailiure(productId: number) {
  return {
    type: ADD_PRODUCT_TO_CART_FAILIURE,
    payload: {
      productId,
    },
  };
}
