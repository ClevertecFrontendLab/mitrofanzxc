import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import {
  passwordRecoveryRequest,
  passwordRecoveryRequestError,
  passwordRecoveryRequestSuccess,
  setFormToast,
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
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationError,
        message: FormToastMessage.RegistrationError,
        button: ButtonLoginTitle.Enter,
      })
    );
  }
}

export function* passwordRecoveryRequestWatcher() {
  yield takeLatest(passwordRecoveryRequest.type, passwordRecoveryRequestWorker);
}
