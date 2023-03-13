import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { setLocalStorage } from 'utils';

import {
  passwordResetRequest,
  passwordResetRequestError,
  passwordResetRequestSuccess,
  setErrorMessage,
  setFormToast,
} from '../slices';
import { PasswordResetRequest, PasswordResetResponse } from '../slices/slices.types';

function* passwordResetRequestWorker(action: { payload: PasswordResetRequest; type: string }) {
  try {
    const { data }: AxiosResponse<PasswordResetResponse> = yield call(
      cleverlandConfig.post,
      API.PasswordReset,
      action.payload
    );

    yield put(passwordResetRequestSuccess(data));
    yield setLocalStorage(LocalStorage.IsLetterReceived, JSON.stringify(true));
    yield put(setErrorMessage(''));
    yield put(
      setFormToast({
        title: FormToastTitle.PasswordResetSuccess,
        message: FormToastMessage.PasswordResetSuccess,
      })
    );
  } catch {
    yield put(passwordResetRequestError());
    yield put(setErrorMessage('error'));
  }
}

export function* passwordResetRequestWatcher() {
  yield takeLatest(passwordResetRequest.type, passwordResetRequestWorker);
}
