import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError, setLocalStorage } from 'utils';

import {
  registrationRequest,
  registrationRequestError,
  registrationRequestSuccess,
  setErrorMessage,
  setFormToast,
} from '../slices';
import { RegistrationRequest, RegistrationResponse } from '../slices/slices.types';

function* registrationRequestWorker(action: { payload: RegistrationRequest; type: string }) {
  try {
    const { data }: AxiosResponse<RegistrationResponse> = yield call(
      cleverlandConfig.post,
      API.Registration,
      action.payload
    );

    yield console.log('response ===', data);
    yield setLocalStorage(LocalStorage.Token, data.jwt);
    yield put(setErrorMessage(''));
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationSuccess,
        message: FormToastMessage.RegistrationSuccess,
        button: ButtonPrimaryTitle.Entrance,
      })
    );
    yield put(registrationRequestSuccess(data));
  } catch (error) {
    console.log('error instanceof CustomError ===', error instanceof CustomError);
    if (error instanceof CustomError) {
      yield put(registrationRequestError());
      yield put(
        setFormToast({
          title: FormToastTitle.RegistrationError,
          message: FormToastMessage.RegistrationWarning,
          button: ButtonPrimaryTitle.BackToRegistration,
        })
      );
    } else {
      yield put(registrationRequestError());
      yield put(
        setFormToast({
          title: FormToastTitle.RegistrationError,
          message: FormToastMessage.RegistrationError,
          button: ButtonPrimaryTitle.Repeat,
        })
      );
    }
  }
}

export function* registrationRequestWatcher() {
  yield takeLatest(registrationRequest.type, registrationRequestWorker);
}
