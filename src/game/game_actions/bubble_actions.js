export const RECEIVE_BUBBLE = 'RECEIVE_BUBBLE';
export const RECEIVE_BUBBLES = 'RECEIVE_BUBBLES';

export const receiveBubbles = bubbles => ({
  type: RECEIVE_BUBBLES,
  bubbles,
});

export const receiveBubble = bubble => ({
  type: RECEIVE_BUBBLE,
  bubble,
});
