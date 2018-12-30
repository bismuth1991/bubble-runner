export const randomIntFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomColor = colors => colors[Math.floor(Math.random() * colors.length)];

export const distance = (x1, y1, x2, y2) => {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt((xDist ** 2) + (yDist ** 2));
};

export const isCollided = (x1, y1, radius1, x2, y2, radius2) => (
  distance(x1, y1, x2, y2) - radius1 - radius2 <= 0
);
