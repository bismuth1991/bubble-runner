export const getBubblesFromState = ({ game }) => ([
  game.player,
  ...game.bubble,
]);

export const dummy = () => 'dummy';
