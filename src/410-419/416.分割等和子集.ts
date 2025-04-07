function canPartition(nums: number[]): boolean {
  const n = nums.length;
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2 !== 0) return false;
  const half = sum / 2;

  const memo = Array.from({ length: n }, () => new Array<boolean>(half));

  return dfs(0, sum / 2);

  function dfs(i: number, remainder: number): boolean {
    if (i === n) {
      return remainder === 0;
    }

    if (memo[i][remainder] !== undefined) {
      return memo[i][remainder];
    }

    const num = nums[i];

    // 选
    const a = remainder >= num && dfs(i + 1, remainder - num);
    // 不选
    const b = dfs(i + 1, remainder);

    return (memo[i][remainder] = a || b);
  }
}

export { canPartition };
