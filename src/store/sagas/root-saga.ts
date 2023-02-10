import { takeEvery } from 'redux-saga/effects';

import { getAllBooks } from '../services';

export function* workerSaga() {
  try {
    const { data } = yield getAllBooks();
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);

    return error;
  }
}

export function* watchClickSaga() {
  yield takeEvery('catalog/catalogReducer', workerSaga);
}

export function* rootSaga() {
  yield watchClickSaga();
}
