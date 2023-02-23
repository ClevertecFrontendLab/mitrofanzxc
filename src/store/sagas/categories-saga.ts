import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { API, cleverlandConfig } from '../../constants/axios';
import { TCategories } from '../../constants/constants.types';
import { categoriesRequest, categoriesRequestFailure, categoriesRequestSuccess } from '../slices';

function* categoriesRequestWorker() {
  try {
    const { data }: AxiosResponse<TCategories[]> = yield call(cleverlandConfig.get, API.Categories);

    yield put(categoriesRequestSuccess(data));
  } catch {
    yield put(categoriesRequestFailure());
  }
}

export function* watchCategoriesRequest() {
  yield takeLatest(categoriesRequest.type, categoriesRequestWorker);
}
