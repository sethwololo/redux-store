import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  return yield all([cart]);
}
