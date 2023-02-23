import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { API, cleverlandConfig } from '../../constants/axios';
import { TCatalogData } from '../../constants/constants.types';
import { sortData } from '../../utils';
import { ESort } from '../../utils/utils.types';
import { catalogRequest, catalogRequestFailure, catalogRequestSuccess } from '../slices';

function* catalogRequestWorker() {
  try {
    const { data }: AxiosResponse<TCatalogData[]> = yield call(cleverlandConfig.get, API.Catalog);

    yield put(catalogRequestSuccess(data.sort(sortData(ESort.Descending))));
  } catch {
    yield put(catalogRequestFailure());
  }
}

export function* watchCatalogRequest() {
  yield takeLatest(catalogRequest.type, catalogRequestWorker);
}
