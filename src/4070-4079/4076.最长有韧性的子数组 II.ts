function resilientSubarray(nums: number[], k: number): number {
  let ans = 0;
  let cnt = 0;
  for (let i = 0; i < nums.length; i++) {
    let r = nums[i] % k;
    if (i > 0 && r === nums[i - 1] % k) {
      cnt++;
    } else {
      // 新的模 k 同余段
      cnt = 1;
    }

    // 去掉一个数后，剩余元素之和是 k 的倍数
    if ((r * (cnt - 1)) % k === 0) {
      ans = Math.max(ans, cnt);
    }
  }
  return ans;
}

export {};
