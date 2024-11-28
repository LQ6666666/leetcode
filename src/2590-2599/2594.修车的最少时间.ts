function repairCars(ranks: number[], cars: number): number {
  let l = 1;
  let r = ranks[0] * cars * cars;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (check(m)) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  return l;

  function check(m: number) {
    let cnt = 0;
    for (const x of ranks) {
      cnt += Math.floor(Math.sqrt(m / x));
    }
    return cnt >= cars;
  }
}

export { repairCars };
