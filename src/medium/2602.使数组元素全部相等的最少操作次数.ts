function minOperations(nums: number[], queries: number[]): number[] {
  const n = nums.length;
  const m = queries.length;
  // 排序
  nums.sort((a, b) => a - b);
  // 前缀和
  const prefix = new Array<bigint>(n + 1).fill(0n);
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + BigInt(nums[i - 1]);
  }

  const ans = new Array<bigint>(m).fill(0n);

  for (let i = 0; i < m; i++) {
    const x = BigInt(queries[i]);

    let l = 0,
      r = n;
    while (l < r) {
      const mid = l + ((r - l) >> 1);
      if (nums[mid] > x) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }

    ans[i] += prefix[n] - prefix[l] - BigInt(n - l) * x;
    (l = 0), (r = n);
    while (l < r) {
      const mid = l + ((r - l) >> 1);
      if (nums[mid] < x) {
        l = mid + 1;
      } else {
        r = mid;
      }
    }
    ans[i] += BigInt(l) * x - prefix[l];
  }

  return ans.map(Number);
}

export {};
