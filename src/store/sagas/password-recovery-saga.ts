import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';

import {
  passwordRecoveryRequest,
  passwordRecoveryRequestError,
  passwordRecoveryRequestSuccess,
  setToast,
} from '../slices';
import { PasswordRecoveryRequest, PasswordRecoveryResponse } from '../slices/slices.types';

function* passwordRecoveryRequestWorker(action: { payload: PasswordRecoveryRequest; type: string }) {
  try {
    const { data }: AxiosResponse<PasswordRecoveryResponse> = yield call(
      cleverlandConfig.post,
      API.PasswordRecovery,
      action.payload
    );

    yield console.log('response ===', data);
    yield put(passwordRecoveryRequestSuccess(data));
  } catch {
    yield put(passwordRecoveryRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* passwordRecoveryRequestWatcher() {
  yield takeLatest(passwordRecoveryRequest.type, passwordRecoveryRequestWorker);
}
