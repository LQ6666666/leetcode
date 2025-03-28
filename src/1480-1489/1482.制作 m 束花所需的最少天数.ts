function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length;
  if (m * k > n) return -1;

  let left = 1;
  let right = Math.max(...bloomDay);

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (check(middle)) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return right;

  function check(day: number) {
    let temp = 0;
    let count = 0;

    for (let i = 0; i < n; i++) {
      if (bloomDay[i] <= day) {
        temp++;

        if (temp === k) {
          count++;
          temp = 0;
        }
      } else {
        temp = 0;
      }
    }

    return count >= m;
  }
}

export { minDays };
