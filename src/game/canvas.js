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

const updateBubbles = (allBubbles) => {
  for (let i = 0; i < allBubbles.length - 1; i += 1) {
    for (let j = i + 1; j < allBubbles.length; j += 1) {
      const bubbleI = allBubbles[i];
      const bubbleJ = allBubbles[j];

      if (isCollided(
        bubbleI.x, bubbleI.y, bubbleI.radius,
        bubbleJ.x, bubbleJ.y, bubbleJ.radius,
      )) {
        console.log('need to resolve collision');
      }
    }
  }
};
