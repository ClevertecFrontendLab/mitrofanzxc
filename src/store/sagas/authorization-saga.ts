import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';

import { authorizationRequest, authorizationRequestError, authorizationRequestSuccess, setToast } from '../slices';
import { AuthorizationRequest, AuthorizationResponse } from '../slices/slices.types';

function* authorizationRequestWorker(action: { payload: AuthorizationRequest; type: string }) {
  try {
    const { data }: AxiosResponse<AuthorizationResponse> = yield call(
      cleverlandConfig.post,
      API.Register,
      action.payload
    );

    yield console.log('response ===', data);
    yield put(authorizationRequestSuccess(data));
  } catch {
    yield put(authorizationRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* authorizationRequestWatcher() {
  yield takeLatest(authorizationRequest.type, authorizationRequestWorker);
}
