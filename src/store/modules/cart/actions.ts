import { IProduct } from './types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addProductToCart = (product: IProduct) => {
  return {
    type: 'ADD_PRODUCTS_TO_CART',
    payload: {
      product,
    },
  };
};
