export function* workerSaga() {
  yield;
}

export function* watchClickSaga() {
  console.log('Hello world!');
  yield;
}

export function* rootSaga() {
  yield watchClickSaga();
}
