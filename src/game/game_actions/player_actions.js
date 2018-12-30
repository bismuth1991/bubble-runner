export const RECEIVE_PLAYER = 'RECEIVE_PLAYER';

export const receivePlayer = player => ({
  type: RECEIVE_PLAYER,
  data: player,
});
