import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { ICatalogData } from '../../constants/constants.interface';
import { getCatalog } from '../services';
import { endCatalogDataLoading, handleCatalogDataSuccess, setCatalogData } from '../slices';

function* workerSaga() {
  try {
    const { data }: AxiosResponse<ICatalogData[]> = yield call(getCatalog);

    yield put(setCatalogData(data.slice(0, 10)));
    yield put(handleCatalogDataSuccess(true));
    yield put(endCatalogDataLoading());
  } catch (error) {
    yield put(handleCatalogDataSuccess(false));
    yield put(endCatalogDataLoading());
  }
}

function* watchClickSaga() {
  yield takeEvery('catalog/startCatalogDataLoading', workerSaga);
}

export function* catalogSaga() {
  yield watchClickSaga();
}
