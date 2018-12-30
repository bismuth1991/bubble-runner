
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

// const animateEntities = ({ game }) => {
//   const allEntities = [
//     ...game.bubbles,
//     ...game.player,
//   ];

//   for (let i = 0; i < allEntities.length; i += 1) {

//   }
// };
