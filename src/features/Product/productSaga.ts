import { PayloadAction } from '@reduxjs/toolkit';
import { productApi } from 'api/productApi';
import { ListResponse, Product, QueryParams } from 'models';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import {
  fetchProductList,
  fetchProductListFailed,
  fetchProductListSuccess,
  setFilter,
  setFilterDebounce,
} from './productSlice';

function* handleFetchProductList(action: PayloadAction<Partial<QueryParams>>) {
  try {
    const response: ListResponse<Product> = yield call(productApi.getAll, action.payload);
    yield put(fetchProductListSuccess(response));
  } catch (error) {
    yield put(fetchProductListFailed());
  }
}

function* handleSearchDebounce(action: PayloadAction<Partial<QueryParams>>) {
  yield put(setFilter(action.payload));
}

function* productSaga() {
  yield takeLatest(fetchProductList.type, handleFetchProductList);

  //   search debounce
  yield debounce(500, setFilterDebounce.type, handleSearchDebounce);
}

export default productSaga;
