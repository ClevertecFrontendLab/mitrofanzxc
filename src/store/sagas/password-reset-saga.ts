import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';

import { passwordResetRequest, passwordResetRequestError, passwordResetRequestSuccess, setToast } from '../slices';
import { PasswordResetRequest, PasswordResetResponse } from '../slices/slices.types';

function* passwordResetRequestWorker(action: { payload: PasswordResetRequest; type: string }) {
  try {
    const { data }: AxiosResponse<PasswordResetResponse> = yield call(
      cleverlandConfig.post,
      API.PasswordReset,
      action.payload
    );

    yield console.log('response ===', data);
    yield put(passwordResetRequestSuccess(data));
  } catch {
    yield put(passwordResetRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* passwordResetRequestWatcher() {
  yield takeLatest(passwordResetRequest.type, passwordResetRequestWorker);
}
