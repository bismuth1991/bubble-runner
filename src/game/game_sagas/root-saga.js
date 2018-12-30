import { all } from 'redux-saga/effects';
import watchNewGameRequest from './game_sagas';

export default function* rootSaga() {
  yield all([
    watchNewGameRequest(),
  ]);
}
