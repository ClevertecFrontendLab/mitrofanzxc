import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError400 } from 'utils';

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

    yield console.log('PasswordRecoveryResponse ===', data);
    yield put(passwordRecoveryRequestSuccess(data));
    yield put(setErrorMessage(''));
    yield put(
      setFormToast({
        title: FormToastTitle.PasswordResetSuccess,
        message: FormToastMessage.PasswordResetSuccess,
      })
    );
  } catch (error) {
    console.log('error instanceof CustomError400 ===', error instanceof CustomError400);
    if (error instanceof CustomError400) {
      yield put(setErrorMessage(TextFieldMessage.WrongLoginOrPassword));
    } else {
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
}

export function* passwordRecoveryRequestWatcher() {
  yield takeLatest(passwordRecoveryRequest.type, passwordRecoveryRequestWorker);
}
