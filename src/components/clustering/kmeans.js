import faker from 'faker';

export function random(start, end) {
  const dif = end - start;
  return Math.random() * dif + start + 1;
}

export function generateSampleData(points) {
  const data = [];
  // Generate random data
  for (let i = 0; i < points; i++) {
    data.push([random(0, 10), random(0, 10)]);
  }
  return data;
}

export function generateClusterColors(size) {
  const colors = [];
  // Generate point color for each cluster.
  for (let i = 0; i < size; i++) {
    colors.push(faker.internet.color());
  }
  return colors;
}

export function draw(
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
  // const lengths =
  /* Iterate though points draw line from their origin to their cluster centroid.
   * `assignments` contains cluster centroid index for each point.
   */
  console.log('assignments', assignments);

  for (i = 0; i < assignments.length; i++) {
    const meanIndex = assignments[i];
    console.log('meanIndex', meanIndex);

    point = data[i];
    const mean = means[meanIndex];
    console.log('means', means);

    // Make lines that will get drawn alpha transparent.
    // context.globalAlpha = 0.1;

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

    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log('length', length);

    // Draw a stroke on the path to make it visible.
    if (meanIndex === 0) {
      context.strokeStyle = 'red';
    } else {
      context.strokeStyle = 'black';
    }
    context.stroke();
    // context.closePath();

    // Restore saved state.
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
