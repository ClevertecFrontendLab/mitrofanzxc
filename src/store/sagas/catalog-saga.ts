import { all, call, put, takeEvery } from 'redux-saga/effects';
import { AxiosError, AxiosResponse } from 'axios';

import { TCatalogData, TCategories } from '../../constants/constants.types';
import { sortData } from '../../utils';
import { ESort } from '../../utils/utils.types';
import { getCatalog, getCategories } from '../services';
import { endLoading, handleSuccess, setCatalogData, setCategoriesData, startCatalogDataLoading } from '../slices';

function* handleCatalog() {
  try {
    const { data: catalogData }: AxiosResponse<TCatalogData[]> = yield call(getCatalog);

    return catalogData;
  } catch (error) {
    if (error instanceof Error || error instanceof AxiosError) {
      throw new Error(error.message);
    }

    return error;
  }
}

function* handleCategories() {
  try {
    const { data: categoriesData }: AxiosResponse<TCategories[]> = yield call(getCategories);

    return categoriesData;
  } catch (error) {
    if (error instanceof Error || error instanceof AxiosError) {
      throw new Error(error.message);
    }

    return error;
  }
}

function* workerSaga() {
  try {
    const [catalogData, categoriesData]: [catalogData: TCatalogData[], categoriesData: TCategories[]] = yield all([
      call(handleCatalog),
      call(handleCategories),
    ]);

    yield put(setCatalogData(catalogData.sort(sortData(ESort.Descending))));
    yield put(setCategoriesData(categoriesData));
    yield put(handleSuccess(true));
    yield put(endLoading());
  } catch (error) {
    yield put(handleSuccess(false));
    yield put(endLoading());
  }
}

function* watchClickSaga() {
  yield takeEvery(startCatalogDataLoading.type, workerSaga);
}

export function* catalogSaga() {
  yield watchClickSaga();
}
