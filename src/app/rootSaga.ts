import productSaga from 'features/Product/productSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([productSaga()]);
}
