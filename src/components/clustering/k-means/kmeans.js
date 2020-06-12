export function calculateLength(
  isShowSubLength,
  fullLengths,
  context,
  clusterColors,
  data,
  means,
  assignments,
  extents,
  ranges
) {
  const { canvas } = context;

  let point;
  let i;
  for (i = 0; i < assignments.length; i++) {
    const meanIndex = assignments[i];
    point = data[i];
    const mean = means[meanIndex];

    context.globalAlpha = 1;
    context.save();

    context.beginPath();

    const x1 =
      (point[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2));
    const y1 =
      (point[1] - extents[1].min + 1) * (canvas.height / (ranges[1] + 2));

    const x2 =
      (mean[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2));
    const y2 =
      (mean[1] - extents[1].min + 1) * (canvas.height / (ranges[1] + 2));

    // Draw path from the point (moveTo) to the cluster centroid.
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);

    const length = Math.round(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));

    if (isShowSubLength) {
      console.log(
        `Длина ${i}-го отрезка для ${assignments[i]} центра =`,
        length
      );

      context.fillStyle = 'black';
      context.textAlign = 'center';
      context.textBaseline = 'bottom';

      context.font = 'bold  7pt Arial';
      context.fillText(length, x1, y1 - 5);
    }

    context.strokeStyle = clusterColors[assignments[i]];
    context.stroke();

    fullLengths[assignments[i]].push(length);

    context.restore();
  }

  for (i = 0; i < means.length; i++) {
    context.save();

    point = means[i];

    context.globalAlpha = 1;
    context.fillStyle = 'black';
    const x =
      (point[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2));
    const y =
      (point[1] - extents[1].min + 1) * (canvas.width / (ranges[1] + 2));

    context.translate(x, y);

    context.beginPath();
    context.arc(0, 0, 5, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    const defLength = Math.round(
      fullLengths[i].reduce((sum, curr) => sum + curr) / fullLengths[i].length
    );

    context.shadowColor = clusterColors[i];
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowBlur = 3;

    context.fillStyle = 'black';
    context.font = 'bold 10pt Arial';
    context.fillText(defLength, 10, -10);

    context.restore();
  }
  return fullLengths;
}

export function draw(
  fullLengths,
  context,
  clusterColors,
  data,
  means,
  assignments,
  extents,
  ranges
) {
  const { canvas } = context;

  // Slightly clear the canvas to make new draws visible.
  context.fillStyle = 'rgba(255,255,255, 1)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  let point;
  let i;
  /* Iterate though points draw line from their origin to their cluster centroid.
   * `assignments` contains cluster centroid index for each point.
   */
  for (i = 0; i < assignments.length; i++) {
    const meanIndex = assignments[i];

    point = data[i];
    const mean = means[meanIndex];

    // Make lines that will get drawn alpha transparent.
    context.globalAlpha = 0.7;

    // Push current state onto the stack.
    context.save();

    context.beginPath();

    // Begin path from current point origin.
    const x1 =
      (point[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2));
    const y1 =
      (point[1] - extents[1].min + 1) * (canvas.height / (ranges[1] + 2));

    const x2 =
      (mean[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2));
    const y2 =
      (mean[1] - extents[1].min + 1) * (canvas.height / (ranges[1] + 2));

    // Draw path from the point (moveTo) to the cluster centroid.
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);

    // Draw a stroke on the path to make it visible.

    context.strokeStyle = 'black';

    context.stroke();

    context.restore();
  }

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

    context.beginPath();

    // Draw point circle.
    context.arc(0, 0, 5, 0, Math.PI * 2, true);

    // Set the color for current point based on which cluster it belongs to.
    context.strokeStyle = clusterColors[assignments[i]];

    // Draw a stroke to make circle visible.
    context.stroke();
    context.closePath();

    context.restore();
  }

  // console.log('means', means);

  // Draw cluster centroids (means).
  for (i = 0; i < means.length; i++) {
    context.save();

    point = means[i];

    context.globalAlpha = 0.5;
    context.fillStyle = clusterColors[i];
    context.translate(
      (point[0] - extents[0].min + 1) * (canvas.width / (ranges[0] + 2)),
      (point[1] - extents[1].min + 1) * (canvas.width / (ranges[1] + 2))
    );
    context.beginPath();
    context.arc(0, 0, 5, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();

    context.restore();
  }
}
