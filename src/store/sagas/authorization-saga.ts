import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { setLocalStorage } from 'utils';

import { authorizationRequest, authorizationRequestError, authorizationRequestSuccess, setFormToast } from '../slices';
import { AuthorizationRequest, AuthorizationResponse } from '../slices/slices.types';

function* authorizationRequestWorker(action: { payload: AuthorizationRequest; type: string }) {
  try {
    const { data }: AxiosResponse<AuthorizationResponse> = yield call(
      cleverlandConfig.post,
      API.Authorization,
      action.payload
    );

    yield console.log('response ===', data);
    yield setLocalStorage(LocalStorage.Token, data.jwt);
    yield put(authorizationRequestSuccess(data));
  } catch {
    yield put(authorizationRequestError());
    yield put(
      setFormToast({
        title: FormToastTitle.AuthorizationError,
        message: FormToastMessage.AuthorizationError,
        button: ButtonLoginTitle.Repeat,
      })
    );
  }
}

export function* authorizationRequestWatcher() {
  yield takeLatest(authorizationRequest.type, authorizationRequestWorker);
}
