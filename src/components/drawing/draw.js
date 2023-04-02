const draw = (drawData, canvasRef) => {
  const { L, W, Wc, Lc, countPipeW, countPipeL, pipeWidth } = drawData;

  const canvas = canvasRef.current;
  console.log('CANVAS', canvas);
  canvas.height = canvas.width;
  const ctx = canvas.getContext('2d');

  const dX = 10;
  const dY = 10;

  const ratio =
    L > W ? (canvas.width - 2 * dX) / L : (canvas.width - 2 * dY) / W;

  const scaleP = 10;
  const pW = scaleP * pipeWidth;

  //drawing pipe by Width
  ctx.fillStyle = '#00AAFF';
  for (let i = 0; i < countPipeW; i++) {
    i === 0
      ? ctx.strokeRect(dX, dY + i * Wc * ratio, L * ratio, pW * ratio)
      : ctx.strokeRect(
          dX,
          dY + (i * Wc - pW / (countPipeW - i)) * ratio,
          L * ratio,
          pW * ratio
        );
  }

  //drawing pipe by Length
  ctx.fillStyle = '#000000';
  for (let i = 0; i < countPipeL; i++) {
    i === 0
      ? ctx.strokeRect(dX + i * Lc * ratio, dY, pW * ratio, W * ratio)
      : ctx.strokeRect(
          dX + (i * Lc - pW / (countPipeL - i)) * ratio,
          dY,
          pW * ratio,
          W * ratio
        );
  }
};

export default draw;
