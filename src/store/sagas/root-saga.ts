import { call, put, takeEvery } from 'redux-saga/effects';

import { ICatalogMockData } from '../../constants';
import { getAllBooks } from '../services';
import { endLoading, handleSuccess, setAllBooks } from '../slices';

function* workerSaga() {
  try {
    const { data }: { data: ICatalogMockData[] } = yield call(getAllBooks);
    console.log('data ===', data);
    yield put(setAllBooks(data));
    yield put(handleSuccess(true));
    yield put(endLoading());
  } catch (error) {
    console.log('error ===', error);
    yield put(handleSuccess(false));
    yield put(endLoading());
  }
}

function* watchClickSaga() {
  yield takeEvery('loader/startLoading', workerSaga);
}

export function* rootSaga() {
  yield watchClickSaga();
}
