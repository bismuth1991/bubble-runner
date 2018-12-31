import { combineReducers } from 'redux';

import bubblesReducer from './bubbles_reducer';
import playerReducer from './player_reducer';

const gameReducer = combineReducers({
  bubbles: bubblesReducer,
  player: playerReducer,
});

export default gameReducer;
