function reachNumber(target: number): number {
  target = Math.abs(target);

  let s = 0;
  let dis = 0;
  while (dis < target) {
    s++;
    dis += s;
  }

  const dt = dis - target;
  if (dt % 2 == 0) {
    return s;
  } else {
    if (s % 2 == 0) {
      return s + 1;
    } else {
      return s + 2;
    }
  }
}

export { reachNumber };
