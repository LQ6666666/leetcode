function countMajoritySubarrays(nums: number[], target: number): number {
  const n = nums.length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i; j < n; j++) {
      count += nums[j] === target ? 1 : -1;

      if (count > 0) {
        ans++;
      }
    }
  }

  return ans;
}

export {};
