import { API, cleverlandConfig } from 'constants/axios';
import { TCatalogData } from 'constants/constants.types';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';
import { sortData } from 'utils';
import { Sort } from 'utils/utils.types';

import { catalogRequest, catalogRequestError, catalogRequestSuccess, setToast } from '../slices';

function* catalogRequestWorker() {
  try {
    const { data }: AxiosResponse<TCatalogData[]> = yield call(cleverlandConfig.get, API.Catalog);

    yield put(catalogRequestSuccess(data.sort(sortData(Sort.Descending))));
  } catch {
    yield put(catalogRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* catalogRequestWatcher() {
  yield takeLatest(catalogRequest.type, catalogRequestWorker);
}
