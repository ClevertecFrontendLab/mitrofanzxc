import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { EToastMessage, EToastType } from '../../components/toast/toast.types';
import { API, cleverlandConfig } from '../../constants/axios';
import { TCategories } from '../../constants/constants.types';
import { categoriesRequest, categoriesRequestError, categoriesRequestSuccess, setToast } from '../slices';

function* categoriesRequestWorker() {
  try {
    const { data }: AxiosResponse<TCategories[]> = yield call(cleverlandConfig.get, API.Categories);

    yield put(categoriesRequestSuccess(data));
  } catch {
    yield put(categoriesRequestError());
    yield put(setToast({ type: EToastType.Error, message: EToastMessage.ConnectionError }));
  }
}

export function* categoriesRequestWatcher() {
  yield takeLatest(categoriesRequest.type, categoriesRequestWorker);
}
