import { randomIntFromRange, distance, randomColor } from './utils';
import { PLAYER_RADIUS } from './player';
import canvas from '../App';

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

const makeBubble = ({ game: { bubbles } }) => {
  const radius = randomRadius();
  let x = randomIntFromRange(PLAYER_RADIUS + 100, canvas.width - radius);
  let y = randomIntFromRange(radius, canvas.height - radius);
  const dX = randomVelocity();
  const dY = randomVelocity();
  const mass = MASS;
  const color = randomColor(COLORS);

  if (bubbles.length !== 0) {
    for (let i = 0; i < bubbles.length; i += 1) {
      if (distance(x, y, bubbles[i].x, bubbles[i].y - radius * 2 < 0)) {
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
