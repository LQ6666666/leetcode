function maximumCandies(candies: number[], k: number): number {
  let left = 1;
  let right = Math.max(...candies);

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (check(candies, k, middle)) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return right;
}

function check(candies: number[], k: number, count: number): boolean {
  let x = 0;
  for (const c of candies) {
    x += Math.floor(c / count);
  }
  return x >= k;
}

export {};
