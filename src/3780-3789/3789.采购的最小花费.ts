function minimumCost(
  cost1: number,
  cost2: number,
  costBoth: number,
  need1: number,
  need2: number
): number {
  let ans = 0;

  if (cost1 + cost2 <= costBoth) {
    ans = cost1 * need1 + cost2 * need2;
  } else {
    const count_3 = Math.min(need1, need2);
    ans = count_3 * costBoth;

    need1 -= count_3;
    need2 -= count_3;

    if (need1 > 0) {
      ans += need1 * Math.min(cost1, costBoth);
    } else if (need2 > 0) {
      ans += need2 * Math.min(cost2, costBoth);
    }
  }

  return ans;
}

export {};
