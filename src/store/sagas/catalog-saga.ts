import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { EToastMessage, EToastType } from '../../components/toast/toast.types';
import { API, cleverlandConfig } from '../../constants/axios';
import { TCatalogData } from '../../constants/constants.types';
import { sortData } from '../../utils';
import { ESort } from '../../utils/utils.types';
import { catalogRequest, catalogRequestError, catalogRequestSuccess, setToast } from '../slices';

function* catalogRequestWorker() {
  try {
    const { data }: AxiosResponse<TCatalogData[]> = yield call(cleverlandConfig.get, API.Catalog);

    yield put(catalogRequestSuccess(data.sort(sortData(ESort.Descending))));
  } catch {
    yield put(catalogRequestError());
    yield put(setToast({ type: EToastType.Error, message: EToastMessage.ConnectionError }));
  }
}

export function* catalogRequestWatcher() {
  yield takeLatest(catalogRequest.type, catalogRequestWorker);
}
