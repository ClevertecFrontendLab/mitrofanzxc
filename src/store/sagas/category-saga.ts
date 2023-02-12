import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { ICatalogData } from '../../constants';
import { getAllBooks } from '../services';
import { endCatalogDataLoading, handleCatalogDataSuccess, setCatalogData } from '../slices';

function* workerSaga() {
  try {
    const { data }: AxiosResponse<ICatalogData[]> = yield call(getAllBooks);

    yield put(setCatalogData(data));
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

export function* allBooksSaga() {
  yield watchClickSaga();
}
