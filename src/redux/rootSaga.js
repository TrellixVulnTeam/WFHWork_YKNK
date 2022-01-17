import { fork, all } from "redux-saga/effects";
import { authWatcher } from "./auth/sagas";
import { directoryWatcher } from "./directory/sagas";

export default function* rootSaga() {
  yield all([fork(authWatcher)]);
  yield all([fork(directoryWatcher)]);
}
