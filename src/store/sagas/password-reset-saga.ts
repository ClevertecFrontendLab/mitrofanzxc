import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import { passwordResetRequest, passwordResetRequestError, passwordResetRequestSuccess, setFormToast } from '../slices';
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
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationError,
        message: FormToastMessage.RegistrationError,
        button: ButtonLoginTitle.Enter,
      })
    );
  }
}

export function* passwordResetRequestWatcher() {
  yield takeLatest(passwordResetRequest.type, passwordResetRequestWorker);
}
