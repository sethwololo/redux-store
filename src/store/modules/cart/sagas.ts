import { all, takeLatest } from 'redux-saga/effects';
import { ADD_PRODUCT_TO_CART } from './types';

function checkProductStock(): void {
  console.log('adicionou ao carrinho');
}

export default all([takeLatest(ADD_PRODUCT_TO_CART, checkProductStock)]);
