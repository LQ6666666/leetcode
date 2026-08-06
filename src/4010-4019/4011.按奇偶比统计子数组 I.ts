function countRatioSubarrays(nums: number[], a: number, b: number): number {
  const n = nums.length;

  let ans = 0;
  for (let i = 0; i < n; i++) {
    let x = 0;
    let y = 0;
    for (let j = i; j < n; j++) {
      if (nums[j] % 2 === 0) {
        x++;
      } else {
        y++;
      }

      if (x / y <= a / b) {
        ans++;
      }
    }
  }

  return ans;
}

export {};
