import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { ICategories } from '../../constants/constants.interface';
import { getCategories } from '../services';
import {
  endCategoriesDataLoading,
  handleCategoriesDataSuccess,
  setCategoriesData,
  startCategoriesDataLoading,
} from '../slices';

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
  yield takeLatest(startCategoriesDataLoading.type, workerSaga);
}

export function* categoriesSaga() {
  yield watchClickSaga();
}
