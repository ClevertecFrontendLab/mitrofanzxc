import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { API, cleverlandConfig } from '../../constants/axios';
import { TBookData } from '../../constants/constants.types';
import { bookRequest, bookRequestFailure, bookRequestSuccess } from '../slices';

function* bookRequestWorker(action: { payload: string; type: string }) {
  try {
    const { data }: AxiosResponse<TBookData> = yield call(cleverlandConfig.get, `${API.Book}${action.payload}`);

    yield put(bookRequestSuccess(data));
  } catch {
    yield put(bookRequestFailure());
  }
}

export function* watchBookRequest() {
  yield takeLatest(bookRequest.type, bookRequestWorker);
}
