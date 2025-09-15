function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);
  while (left <= right) {
    const speed = left + ((right - left) >> 1);
    const hour = helper(piles, speed);

    if (hour > h) {
      left = speed + 1;
    } else {
      right = speed - 1;
    }
  }

  return left;
}

function helper(piles: number[], speed: number): number {
  let hour = 0;
  for (let i = 0; i < piles.length; i++) {
    hour += Math.ceil(piles[i] / speed);
  }
  return hour;
}

export { minEatingSpeed };
