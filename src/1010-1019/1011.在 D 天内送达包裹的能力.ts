function shipWithinDays(weights: number[], days: number): number {
  let left = 1;
  let right = 25e6;

  while (left <= right) {
    const weight = left + ((right - left) >> 1);
    if (check(weights, days, weight)) {
      right = weight - 1;
    } else {
      left = weight + 1;
    }
  }

  return left;
}

function check(weights: number[], days: number, weight: number): boolean {
  let day = 1;
  let temp = 0;

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] > weight) {
      return false;
    }

    temp += weights[i];
    if (temp > weight) {
      temp = weights[i];
      day++;
    }

    if (day > days) {
      return false;
    }
  }

  return true;
}


export { shipWithinDays };
