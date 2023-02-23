import { all, call } from 'redux-saga/effects';

import { watchBookRequest } from './book-saga';
import { watchCatalogRequest } from './catalog-saga';
import { watchCategoriesRequest } from './categories-saga';

export function* rootSaga() {
  yield all([call(watchCatalogRequest), call(watchCategoriesRequest), call(watchBookRequest)]);
}
