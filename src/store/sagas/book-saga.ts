import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IBookData } from '../../constants/constants.interface';
import { getBook } from '../services';
import { endBookDataLoading, handleBookDataSuccess, setBookData, startBookDataLoading } from '../slices';

function* workerSaga(action: { payload: string; type: string }) {
  try {
    const { data }: AxiosResponse<IBookData> = yield call(getBook, action.payload);

    yield put(setBookData(data));
    yield put(handleBookDataSuccess(true));
    yield put(endBookDataLoading());
  } catch (error) {
    yield put(handleBookDataSuccess(false));
    yield put(endBookDataLoading());
  }
}

function* watchClickSaga() {
  yield takeLatest(startBookDataLoading.type, workerSaga);
}

export function* bookSaga() {
  yield watchClickSaga();
}
