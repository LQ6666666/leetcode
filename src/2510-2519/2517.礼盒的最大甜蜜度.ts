function maximumTastiness(price: number[], k: number): number {
  price.sort((a, b) => a - b);
  const n = price.length;
  let left = 0,
    right = price.at(-1)! - price.at(0)!;

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

  function check(x: number) {
    let prev = price[0];
    let cnt = 1;
    for (let i = 1; i < n; ++i) {
      if (price[i] - prev >= x) {
        cnt += 1;
        prev = price[i];
      }
    }
    return cnt >= k;
  }
}

export { maximumTastiness };
