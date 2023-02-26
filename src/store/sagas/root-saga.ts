import { all, call } from 'redux-saga/effects';

import { bookRequestWatcher } from './book-saga';
import { catalogRequestWatcher } from './catalog-saga';
import { categoriesRequestWatcher } from './categories-saga';

export function* rootSaga() {
  yield all([call(catalogRequestWatcher), call(categoriesRequestWatcher), call(bookRequestWatcher)]);
}
