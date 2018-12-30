import { isCollided } from './game_utils/utils';
import resolveCollision from './game_utils/resolve_collision_util';
import { receiveBubble, receiveBubbles } from './game_actions/bubble_actions';


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const drawBubble = (bubble) => {
  const {
    x, y, radius, color,
  } = bubble;

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
};

const updateBubble = (bubble, rest) => {
  drawBubble(bubble);

  const {
    x, y, dX, dY, radius,
  } = bubble;

  for (let i = 0; i < rest.length - 1; i += 1) {
    if (isCollided(
      x, y, radius,
      rest[i].x, rest[i].y, rest[i].radius,
    )) {
      const alteredVelocityBubbles = resolveCollision(bubble, rest[i]);
      dispatch(receiveBubbles(alteredVelocityBubbles));
    }
  }

  if (x - radius <= 0 || x + radius >= canvas.width) {
    dispatch(receiveBubble({
      ...bubble,
      dX: -dX,
    }));
  }
  if (y - radius <= 0 || y + radius >= canvas.height) {
    dispatch(receiveBubble({
      ...bubble,
      dY: -dY,
    }));
  }

  dispatch(receiveBubble({
    ...bubble,
    x: x + dX,
    y: y + dY,
  }));
};
