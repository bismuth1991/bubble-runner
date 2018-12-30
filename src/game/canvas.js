import { isCollided } from './utils';

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

// const updateBubble = (bubble, rest) => {
//   for (let i = 0; i < rest.length - 1; i += 1) {
//     drawBubble(bubble);

//     const {
//       x, y, dX, dY, radius, mass,
//     } = bubble;

//     if (isCollided(
//       x, y, radius,
//       rest[i].x, rest[i].y, rest[i].radius,
//     )) {
//       console.log('need to resolve collision');
//     }

//     dispatchEvent({
//       type: UPDATE_BUBBLE_POS,
//       data: {
//         x: x + dX,
//         y: y + dY,
//       },
//     });
//   }
// };
