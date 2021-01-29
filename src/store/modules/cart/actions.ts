/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ActionTypes, IProduct } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: ActionTypes.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailiure(productId: number) {
  return {
    type: ActionTypes.addProductToCartFailiure,
    payload: {
      productId,
    },
  };
}
