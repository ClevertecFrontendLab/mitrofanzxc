import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IBookData } from '../../constants/constants.interface';
import { getBook } from '../services';
import { endLoading, handleSuccess, setBookData, startBookDataLoading } from '../slices';

function* workerSaga(action: { payload: string; type: string }) {
  try {
    const { data }: AxiosResponse<IBookData> = yield call(getBook, action.payload);

    yield put(setBookData(data));
    yield put(handleSuccess(true));
    yield put(endLoading());
  } catch (error) {
    yield put(handleSuccess(false));
    yield put(endLoading());
  }
}

function* watchClickSaga() {
  yield takeLatest(startBookDataLoading.type, workerSaga);
}

export function* bookSaga() {
  yield watchClickSaga();
}
