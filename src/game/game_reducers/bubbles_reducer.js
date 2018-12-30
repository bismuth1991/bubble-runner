import { RECEIVE_BUBBLE, RECEIVE_BUBBLES } from '../game_actions/bubble_actions';

const bubblesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BUBBLES:
      return {
        ...action,
        ...action.bubbles,
      };
    case RECEIVE_BUBBLE:
      return {
        ...action,
        ...action.bubble,
      };
    default:
      return state;
  }
};

export default bubblesReducer;
