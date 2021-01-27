import { ADD_PRODUCT_TO_CART, IProduct } from './types';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addProductToCart = (product: IProduct) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: {
    product,
  },
});
