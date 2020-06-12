export function draw(context, data, labels, colors, extents, ranges) {
  const { canvas } = context;

  // Slightly clear the canvas to make new draws visible.
  context.fillStyle = 'rgba(255,255,255, 1)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  let point;
  let i;

  console.log(data);

  // Plot every point onto canvas.
  for (i = 0; i < data.length; i++) {
    context.save();

    point = data[i];

    // Make style fully opaque.
    context.globalAlpha = 1;

    // Move canvas origin on the grid to current point position.
    context.translate(
      (point[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2)),
      (point[1] - extents[1].min + 1) * (canvas.width / (ranges[1] + 2))
    );

    // context.translate(point[0], point[1]);

    // context.translate(10, 10);

    context.beginPath();

    // Draw point circle.
    context.arc(0, 0, 5, 0, Math.PI * 2, true);

    const flag = labels[i];
    if (flag === -1) {
      context.strokeStyle = colors[labels[i]];
      context.stroke();
    } else {
      context.fillStyle = colors[labels[i]];
      context.shadowColor = colors[labels[i]];
      context.shadowBlur = 20;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fill();
    }

    // Set the color for current point based on which cluster it belongs to.

    // context.strokeStyle = 'black';

    // Draw a stroke to make circle visible.

    context.closePath();

    context.restore();
  }
}
