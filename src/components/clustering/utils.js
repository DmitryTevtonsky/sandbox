/* eslint-disable camelcase */
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

export const getOption = randomization => {
  let option;
  switch (randomization) {
    case 'linear': {
      option = {
        name: 'linear',
        scope: 2,
        err: 200
      };
      break;
    }
    case 'circular': {
      option = {
        name: 'circular',
        k: 25,
        err: 20,
        outlier: 30
      };
      break;
    }
    default: {
      option = {
        name: ''
      };
      break;
    }
  }
  return option;
};

export const generateData = (pointsCount, rangeX, rangeY, offset, option) => {
  const data = generateRandomPoints(
    offset,
    rangeX - offset,
    offset,
    rangeY - offset,
    pointsCount,
    option
  ).map(point => Object.values(point));

  const Xxes = [];
  const Yxes = [];
  data.forEach(([x, y]) => {
    Xxes.push(x);
    Yxes.push(y);
  });

  const extents = [
    {
      min: Math.min.apply(null, Xxes),
      max: Math.max.apply(null, Xxes)
    },
    {
      min: Math.min.apply(null, Yxes),
      max: Math.max.apply(null, Yxes)
    }
  ];

  const dataExtentRanges = () => {
    const ranges = [];

    for (let i = 0; i < extents.length; i++) {
      ranges[i] = extents[i].max - extents[i].min;
    }

    return ranges;
  };

  return { data, extents, ranges: dataExtentRanges() };
};

export function generateRandomPoints(min_x, max_x, min_y, max_y, num, option) {
  const rand_pts = [];
  switch (option.name) {
    case 'linear': {
      const { scope, err } = option;

      for (var i = 0; i < num; i++) {
        if (i > num * 0.9) {
          rand_pts[i] = {
            x: Math.random() * (max_x - min_x) + min_x,
            y: Math.random() * (max_y - min_y) + min_y
          };
        } else {
          const lx = Math.random() * (max_x - min_x) + min_x;
          const ly = lx * scope;
          const errx = Math.random() * err - err / 2;
          const erry = Math.random() * err - err / 2;
          rand_pts[i] = {
            x: lx + errx,
            y: ly + erry
          };
        }
      }
      break;
    }
    case 'circular': {
      const r = [];
      const seeds = [];
      const { k, outlier, err } = option;
      seeds.length = k;
      r.length = k;
      for (var i = 0; i < k; i++) {
        seeds[i] = {
          x: Math.random() * (max_x - min_x) + min_x,
          y: Math.random() * (max_y - min_y) + min_y
        };
        r[i] = Math.random() * ((max_x - min_x) / 4);
      }
      for (var i = 0; i < num; i++) {
        if (i > num - outlier) {
          rand_pts[i] = {
            x: Math.random() * (max_x - min_x) + min_x,
            y: Math.random() * (max_y - min_y) + min_y
          };
        } else {
          let rx = Math.random() * (2 * r[i % k]) + seeds[i % k].x - r[i % k];
          let ry =
            Math.sqrt(
              Math.abs(
                r[i % k] * r[i % k] -
                  (rx - seeds[i % k].x) * (rx - seeds[i % k].x)
              )
            ) *
              Math.pow(-1, (i % 2) + 1) +
            seeds[i % k].y;

          const errx = Math.random() * err - err / 2;
          const erry = Math.random() * err - err / 2;
          rx += errx;
          ry += erry;

          if (rx < min_x) rx += min_x;
          if (rx > max_x) rx -= max_x;
          if (ry > max_y) ry -= max_y;
          if (ry < min_y) ry += min_y;

          rand_pts[i] = {
            x: rx,
            y: ry
          };
        }
      }
      break;
    }
    default: {
      for (var i = 0; i < num; i++) {
        rand_pts[i] = [
          Math.random() * (max_x - min_x) + min_x,
          Math.random() * (max_y - min_y) + min_y
        ];
      }
      break;
    }
  }
  return rand_pts;
}
