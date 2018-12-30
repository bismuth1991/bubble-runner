import {
  select, put, call, takeLatest,
} from 'redux-saga/effects';
import { RECEIVE_BUBBLE } from '../game_actions/bubble_actions';
import { RECEIVE_PLAYER } from '../game_actions/player_actions';
import makeBubble from '../bubble';
import { createPlayer } from '../player';


function* loadAssests(numBubbles) {
  for (let i = 0; i < numBubbles; i += 1) {
    const bubble = yield select(makeBubble);
    yield put({ type: RECEIVE_BUBBLE, bubble });
  }

  const player = yield call(createPlayer);
  yield put({ type: RECEIVE_PLAYER, player });
}

function* startGame() {

}

function* createNewGame() {
  yield call(loadAssests);
  yield call(startGame);
}

function* watchNewGameRequest() {
  yield takeLatest(NEW_GAME_REQUEST, loadAssests);
}
