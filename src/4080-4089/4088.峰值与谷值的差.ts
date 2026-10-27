function peakValleyDifference(nums: number[]): number {
  let peakSum = 0;
  let valleySum = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peakSum += nums[i];
    } else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) {
      valleySum += nums[i];
    }
  }
  return peakSum - valleySum
}

export {};
