import { RECEIVE_PLAYER } from '../game_actions/player_actions';

const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PLAYER:
      return action.player;
    default:
      return state;
  }
};

export default playerReducer;
