import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { EToastMessage, EToastType } from '../../components/toast/toast.types';
import { API, cleverlandConfig } from '../../constants/axios';
import { TBookData } from '../../constants/constants.types';
import { bookRequest, bookRequestError, bookRequestSuccess, setToast } from '../slices';

function* bookRequestWorker(action: { payload: string; type: string }) {
  try {
    const { data }: AxiosResponse<TBookData> = yield call(cleverlandConfig.get, `${API.Book}${action.payload}`);

    yield put(bookRequestSuccess(data));
  } catch {
    yield put(bookRequestError());
    yield put(setToast({ type: EToastType.Error, message: EToastMessage.ConnectionError }));
  }
}

export function* bookRequestWatcher() {
  yield takeLatest(bookRequest.type, bookRequestWorker);
}
