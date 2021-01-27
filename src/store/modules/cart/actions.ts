import { IProduct } from './types';

export const addProductToCart = (product: IProduct) => {
  return {
    type: 'ADD_PRODUCTS_TO_CART',
    payload: {
      product,
    },
  };
};
