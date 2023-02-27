import { all, call } from 'redux-saga/effects';

import { authorizationRequestWatcher } from './authorization-saga';
import { bookRequestWatcher } from './book-saga';
import { catalogRequestWatcher } from './catalog-saga';
import { categoriesRequestWatcher } from './categories-saga';
import { passwordRecoveryRequestWatcher } from './password-recovery-saga';
import { passwordResetRequestWatcher } from './password-reset-saga';
import { registrationRequestWatcher } from './registration-saga';

export function* rootSaga() {
  yield all([
    call(authorizationRequestWatcher),
    call(bookRequestWatcher),
    call(catalogRequestWatcher),
    call(categoriesRequestWatcher),
    call(passwordRecoveryRequestWatcher),
    call(passwordResetRequestWatcher),
    call(registrationRequestWatcher),
  ]);
}
