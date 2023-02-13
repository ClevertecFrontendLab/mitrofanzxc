import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { ICatalogData, ICategories } from '../../constants/constants.interface';
import { getCatalog, getCategories } from '../services';
import { endLoading, handleSuccess, setCatalogData, setCategoriesData, startCatalogDataLoading } from '../slices';

function* handleCatalog() {
  try {
    const { data }: AxiosResponse<ICatalogData[]> = yield call(getCatalog);

    yield put(setCatalogData(data));
    yield put(handleSuccess(true));
    yield put(endLoading());
  } catch (error) {
    yield put(handleSuccess(false));
    yield put(endLoading());
  }
}

function* handleCategories() {
  try {
    const { data }: AxiosResponse<ICategories[]> = yield call(getCategories);

    yield put(setCategoriesData(data));
    yield put(handleSuccess(true));
    yield put(endLoading());
  } catch (error) {
    yield put(handleSuccess(false));
    yield put(endLoading());
  }
}

function* workerSaga() {
  yield all([call(handleCatalog), call(handleCategories)]);
}

function* watchClickSaga() {
  yield takeEvery(startCatalogDataLoading.type, workerSaga);
}

export function* catalogSaga() {
  yield watchClickSaga();
}
