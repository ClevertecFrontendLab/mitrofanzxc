import { API, cleverlandConfig } from 'constants/axios';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonPrimaryTitle } from 'components/buttons/button-primary/button-primary.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { TextFieldMessage } from 'components/text-field/text-field.types';
import { CustomError400, CustomError500, setToken } from 'utils';

import {
  authorizationRequest,
  authorizationRequestError,
  authorizationRequestSuccess,
  authorizationRequestWarning,
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

    yield put(authorizationRequestSuccess(data));
    yield call(setToken, data.jwt);
    yield put(setErrorMessage(''));
  } catch (error) {
    if (error instanceof CustomError400) {
      yield put(authorizationRequestWarning());
      yield put(setErrorMessage(TextFieldMessage.WrongLoginOrPassword));
    }

    if (error instanceof CustomError500) {
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
