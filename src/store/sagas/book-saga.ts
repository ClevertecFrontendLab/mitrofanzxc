import { API, cleverlandConfig } from 'constants/axios';
import { BookData } from 'constants/constants.types';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';

import { bookRequest, bookRequestError, bookRequestSuccess, setToast } from '../slices';

function* bookRequestWorker(action: { payload: string; type: string }) {
  try {
    const { data }: AxiosResponse<BookData> = yield call(cleverlandConfig.get, `${API.Book}${action.payload}`);

    yield put(bookRequestSuccess(data));
  } catch {
    yield put(bookRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* bookRequestWatcher() {
  yield takeLatest(bookRequest.type, bookRequestWorker);
}
