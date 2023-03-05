import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ButtonLoginTitle } from 'components/buttons/button-login/button-login.types';
import { FormToastMessage, FormToastTitle } from 'components/form-toast/form-toast.types';
import { setLocalStorage } from 'utils';

import { registrationRequest, registrationRequestError, registrationRequestSuccess, setFormToast } from '../slices';
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
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationSuccess,
        message: FormToastMessage.RegistrationSuccess,
        button: ButtonLoginTitle.Enter,
      })
    );
    yield put(registrationRequestSuccess(data));
  } catch {
    yield put(registrationRequestError());
    yield put(
      setFormToast({
        title: FormToastTitle.RegistrationError,
        message: FormToastMessage.RegistrationError,
        button: ButtonLoginTitle.Repeat,
      })
    );
  }
}

export function* registrationRequestWatcher() {
  yield takeLatest(registrationRequest.type, registrationRequestWorker);
}
