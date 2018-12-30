import { randomIntFromRange, randomColor, isCollided } from './utils';
import { PLAYER_RADIUS } from './player';

const canvas = document.querySelector('canvas');

const randomVelocity = () => (Math.random() - 0.5) * 10;
const randomRadius = () => Math.random() * 100 + 20;
const MASS = 1;
const COLORS = [
  '#393E46',
  '#00ADB5',
  '#FFF4E0',
  '#F8B500',
  '#FC3C3C',
];

const makeBubble = (currentBubbles) => {
  const radius = randomRadius();
  let x = randomIntFromRange(PLAYER_RADIUS + 100, canvas.width - radius);
  let y = randomIntFromRange(radius, canvas.height - radius);
  const dX = randomVelocity();
  const dY = randomVelocity();
  const mass = MASS;
  const color = randomColor(COLORS);

  if (currentBubbles.length !== 0) {
    for (let i = 0; i < currentBubbles.length; i += 1) {
      if (isCollided(
        x, y, radius,
        currentBubbles[i].x, currentBubbles[i].y, currentBubbles[i].radius,
      )) {
        x = randomIntFromRange(radius, canvas.width - radius);
        y = randomIntFromRange(radius, canvas.height - radius);

        i = -1;
      }
    }
  }

  return {
    x, y, dX, dY, radius, mass, color,
  };
};

export default makeBubble;
