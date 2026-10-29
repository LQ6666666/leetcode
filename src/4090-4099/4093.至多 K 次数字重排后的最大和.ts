function maximizeSum(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    const x = nums[i];
    ans += x;

    const arr: number[] = [];
    let t = x;
    while (t) {
      arr.push(t % 10);
      t = Math.floor(t / 10);
    }
    arr.sort((a, b) => b - a);

    let y = 0;
    for (let j = 0; j < arr.length; j++) {
      y = y * 10 + arr[j];
    }

    nums[i] = y - x;
  }

  nums.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    ans += nums[i];
  }
  return ans;
}

export {};
