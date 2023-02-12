import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { ICategories } from '../../constants/constants.interface';
import { getCategories } from '../services';
import { endCategoriesDataLoading, handleCategoriesDataSuccess, setCategoriesData } from '../slices';

function* workerSaga() {
  try {
    const { data }: AxiosResponse<ICategories[]> = yield call(getCategories);

    yield put(setCategoriesData(data));
    yield put(handleCategoriesDataSuccess(true));
    yield put(endCategoriesDataLoading());
  } catch (error) {
    yield put(handleCategoriesDataSuccess(false));
    yield put(endCategoriesDataLoading());
  }
}

function* watchClickSaga() {
  yield takeEvery('categories/startCategoriesDataLoading', workerSaga);
}

export function* categoriesSaga() {
  yield watchClickSaga();
}
