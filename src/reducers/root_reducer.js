import { combineReducers } from 'redux';

import gameReducer from '../game/game_reducers/game_reducer';

const rootReducer = combineReducers({
  game: gameReducer,
});

export default rootReducer;
