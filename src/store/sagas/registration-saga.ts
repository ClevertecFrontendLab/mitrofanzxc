import { API, cleverlandConfig } from 'constants/axios';
import { LocalStorage } from 'constants/local-storage';

import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { ToastMessage, ToastType } from 'components/toast/toast.types';
import { setLocalStorage } from 'utils';

import { registrationRequest, registrationRequestError, registrationRequestSuccess, setToast } from '../slices';
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
    yield put(registrationRequestSuccess(data));
  } catch {
    yield put(registrationRequestError());
    yield put(setToast({ type: ToastType.Error, message: ToastMessage.ConnectionError }));
  }
}

export function* registrationRequestWatcher() {
  yield takeLatest(registrationRequest.type, registrationRequestWorker);
}
