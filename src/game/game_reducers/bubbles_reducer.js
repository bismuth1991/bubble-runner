import { RECEIVE_CIRCLE } from '../game_actions/bubble_actions';

const bubblesReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CIRCLE:
      return [
        ...state,
        action.data,
      ];
    default:
      return state;
  }
};

export default bubblesReducer;
