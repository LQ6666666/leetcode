function minZeroArray(nums: number[], queries: number[][]): number {
  const n = queries.length;
  const m = nums.length;

  if (nums.reduce((memo, num) => num + memo, 0) === 0) {
    return 0;
  }

  let ans = -1;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    const middle = left + ((right - left) >> 1);
    if (check(middle)) {
      ans = middle + 1;
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return ans;

  function check(index: number): boolean {
    const diff = new Array<number>(m + 1).fill(0);
    for (let i = 0; i <= index; i++) {
      const [l, r, v] = queries[i];
      diff[l] += v;
      diff[r + 1] -= v;
    }

    let sum = 0;
    for (let i = 0; i < m; i++) {
      sum += diff[i];
      // sum 表示 nums[i] 要减掉多少
      if (nums[i] > sum) {
        return false;
      }
    }

    return true;
  }
}

export {};
