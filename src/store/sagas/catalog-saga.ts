import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { ICatalogData } from '../../constants/constants.interface';
import { getCatalog } from '../services';
import { endCatalogDataLoading, handleCatalogDataSuccess, setCatalogData, startCatalogDataLoading } from '../slices';

function* workerSaga() {
  try {
    const { data }: AxiosResponse<ICatalogData[]> = yield call(getCatalog);

    yield put(setCatalogData(data));
    yield put(handleCatalogDataSuccess(true));
    yield put(endCatalogDataLoading());
  } catch (error) {
    yield put(handleCatalogDataSuccess(false));
    yield put(endCatalogDataLoading());
  }
}

function* watchClickSaga() {
  yield takeLatest(startCatalogDataLoading.type, workerSaga);
}

export function* catalogSaga() {
  yield watchClickSaga();
}
