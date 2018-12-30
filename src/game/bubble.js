import { randomIntFromRange, distance, randomColor } from './utils';
import canvas from '../App';
import store from '../App';

const COLORS = [
  '#393E46',
  '#00ADB5',
  '#FFF4E0',
  '#F8B500',
  '#FC3C3C',
];

const ramdomRadius = Math.random() * 100 + 20;

const makeBubbles = (num) => {
  for (let i = 0; i < num; i += 1) {
    const radius = ramdomRadius;
    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);
    const color = randomColor(COLORS);

    if (i !== 0) {
      const { game: { bubbles } } = store.getState();

      for (let j = 0; j < bubbles.length; j += 1) {
        if (distance(x, y, bubbles[j].x, bubbles[j].y - radius * 2 < 0)) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);

          j = -1;
        }
      }
    }

    store.dispatch(RECEIVE_BUBBLE, {
      x, y, radius, color,
    });
  }
};
