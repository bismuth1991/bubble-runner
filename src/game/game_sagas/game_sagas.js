import {
  select, put, call, takeLatest,
} from 'redux-saga/effects';
import { RECEIVE_BUBBLE } from '../game_actions/bubble_actions';
import { RECEIVE_PLAYER } from '../game_actions/player_actions';
import { getBubblesFromState } from '../selectors';
import makeBubble from '../bubble';
import { createPlayer } from '../player';
import animate from '../canvas';


function* loadAssests(numBubbles) {
  for (let i = 0; i < numBubbles; i += 1) {
    const currentBubbles = yield select(getBubblesFromState);

    const bubble = yield call(makeBubble(currentBubbles));
    yield put({ type: RECEIVE_BUBBLE, bubble });
  }

  const player = yield call(createPlayer);
  yield put({ type: RECEIVE_PLAYER, player });
}

function* startGame() {
  yield call(animate);
}

function* createNewGame() {
  yield call(loadAssests);
  yield call(startGame);
}

function* watchNewGameRequest() {
  yield takeLatest(NEW_GAME_REQUEST, createNewGame);
}
