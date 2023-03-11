import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError } from 'utils';

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

    yield console.log('PasswordResetResponse ===', data);
    yield put(setErrorMessage(''));
    yield put(
      setFormToast({
        title: FormToastTitle.PasswordResetSuccess,
        message: FormToastMessage.PasswordResetSuccess,
      })
    );
    yield put(passwordResetRequestSuccess(data));
  } catch {
    yield put(passwordResetRequestError());
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationError,
        message: FormToastMessage.AuthorizationError,
        button: ButtonPrimaryTitle.Repeat,
      })
    );
  }
}

export function* passwordResetRequestWatcher() {
  yield takeLatest(passwordResetRequest.type, passwordResetRequestWorker);
}
