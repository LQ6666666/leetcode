function minEatingSpeed(piles: number[], h: number): number {
  let max = piles[0];
  for (const num of piles) {
    max = Math.max(max, num);
  }

  let left = 1,
    right = max;
  while (left <= right) {
    const middle = left + ((right - left) >> 1);

    // 计算耗时
    let cost = 0;
    for (const pile of piles) {
      if (pile > middle) {
        cost += Math.ceil(pile / middle);
      } else {
        cost++;
      }
    }

    if (cost > h) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

export { minEatingSpeed };
