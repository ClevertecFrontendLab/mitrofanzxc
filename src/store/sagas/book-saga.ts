import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IBookData } from '../../constants/constants.interface';
import { getBook } from '../services';
import { endBookDataLoading, handleBookDataSuccess, setBookData } from '../slices';

function* workerSaga() {
  try {
    const { data }: AxiosResponse<IBookData> = yield call(() => getBook);

    yield put(setBookData(data));
    yield put(handleBookDataSuccess(true));
    yield put(endBookDataLoading());
  } catch (error) {
    yield put(handleBookDataSuccess(false));
    yield put(endBookDataLoading());
  }
}

function* watchClickSaga() {
  yield takeEvery('catalog/startBookDataLoading', workerSaga);
}

export function* bookSaga() {
  yield watchClickSaga();
}
