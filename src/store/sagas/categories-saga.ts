import { API, cleverlandConfig } from 'constants/axios';
import { TCategories } from 'constants/constants.types';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';

import { categoriesRequest, categoriesRequestError, categoriesRequestSuccess, setToast } from '../slices';

function* categoriesRequestWorker() {
  try {
    const { data }: AxiosResponse<TCategories[]> = yield call(cleverlandConfig.get, API.Categories);

    yield put(categoriesRequestSuccess(data));
  } catch {
    yield put(categoriesRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* categoriesRequestWatcher() {
  yield takeLatest(categoriesRequest.type, categoriesRequestWorker);
}
