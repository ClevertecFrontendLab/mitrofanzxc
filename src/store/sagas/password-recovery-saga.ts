import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError400, removeFromLocalStorage } from 'utils';

import {
  passwordRecoveryRequest,
  passwordRecoveryRequestError,
  passwordRecoveryRequestSuccess,
  setErrorMessage,
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

    yield put(passwordRecoveryRequestSuccess(data));
    yield removeFromLocalStorage(LocalStorage.IsLetterReceived);
    yield put(setErrorMessage(''));
    yield put(
      setFormToast({
        title: FormToastTitle.PasswordRecoverySuccess,
        message: FormToastMessage.PasswordRecoverySuccess,
        button: ButtonPrimaryTitle.Entrance,
      })
    );
  } catch {
    yield put(passwordRecoveryRequestError());
    yield put(setErrorMessage(''));
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationError,
        message: FormToastMessage.AuthorizationError,
        button: ButtonPrimaryTitle.Repeat,
      })
    );
  }
}

export function* passwordRecoveryRequestWatcher() {
  yield takeLatest(passwordRecoveryRequest.type, passwordRecoveryRequestWorker);
}
