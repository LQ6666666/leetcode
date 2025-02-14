function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);

  const n = position.length;
  let left = 1;
  let right = position[n - 1] - position[0];
  let ans = -1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (check(middle)) {
      ans = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return ans;

  function check(x: number): boolean {
    let pre = position[0];
    let cnt = 1;
    for (let i = 1; i < n; ++i) {
      if (position[i] - pre >= x) {
        pre = position[i];
        cnt += 1;
      }
    }
    return cnt >= m;
  }
}

export { maxDistance };
