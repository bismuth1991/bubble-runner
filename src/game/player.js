import { randomColor, randomIntFromRange } from './utils';
import canvas from '../App';

export const PLAYER_RADIUS = 30;
const SPEED = 5;
const COLORS = [
  '#393E46',
  '#00ADB5',
  '#FFF4E0',
  '#F8B500',
  '#FC3C3C',
];

export const createPlayer = () => ({
  x: PLAYER_RADIUS,
  y: randomIntFromRange(PLAYER_RADIUS, canvas.height - PLAYER_RADIUS),
  dX: 0,
  dY: 0,
  speed: SPEED,
  radius: PLAYER_RADIUS,
  color: randomColor(COLORS),
});
