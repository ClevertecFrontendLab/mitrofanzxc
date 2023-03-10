import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError, setLocalStorage } from 'utils';

import {
  authorizationRequest,
  authorizationRequestError,
  authorizationRequestSuccess,
  setErrorMessage,
  setFormToast,
} from '../slices';
import { AuthorizationRequest, AuthorizationResponse } from '../slices/slices.types';

function* authorizationRequestWorker(action: { payload: AuthorizationRequest; type: string }) {
  try {
    const { data }: AxiosResponse<AuthorizationResponse> = yield call(
      cleverlandConfig.post,
      API.Authorization,
      action.payload
    );

    console.log('response ===', data);
    yield setLocalStorage(LocalStorage.Token, data.jwt);
    yield put(setErrorMessage(''));
    yield put(authorizationRequestSuccess(data));
  } catch (error) {
    console.log('error instanceof CustomError ===', error instanceof CustomError);
    if (error instanceof CustomError) {
      yield put(setErrorMessage(TextFieldMessage.WrongLoginOrPassword));
    }

    if (!(error instanceof CustomError)) {
      yield put(authorizationRequestError());
      yield put(
        setFormToast({
          title: FormToastTitle.AuthorizationError,
          message: FormToastMessage.AuthorizationError,
          button: ButtonPrimaryTitle.Repeat,
        })
      );
    }
  }
}

export function* authorizationRequestWatcher() {
  yield takeLatest(authorizationRequest.type, authorizationRequestWorker);
}
