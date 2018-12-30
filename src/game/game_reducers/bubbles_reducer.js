import { RECEIVE_BUBBLE } from '../game_actions/bubble_actions';

const bubblesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_BUBBLE:
      return [
        ...state,
        action.data,
      ];
    default:
      return state;
  }
};

export default bubblesReducer;
