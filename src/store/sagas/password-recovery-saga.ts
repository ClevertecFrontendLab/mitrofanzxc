import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';

import {
  openNewPassword,
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
    yield put(openNewPassword());
  } catch {
    yield put(passwordRecoveryRequestError());
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationError,
        message: FormToastMessage.RegistrationError,
        button: ButtonPrimaryTitle.Entrance,
      })
    );
  }
}

export function* passwordRecoveryRequestWatcher() {
  yield takeLatest(passwordRecoveryRequest.type, passwordRecoveryRequestWorker);
}
