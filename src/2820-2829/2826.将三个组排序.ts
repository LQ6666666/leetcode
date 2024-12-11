function minimumOperations(nums: number[]): number {
  // num.length - 最长递增子序列的长度
  const n = nums.length;
  const seq: number[] = [nums[0]];
  let size = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] >= seq[size - 1]) {
      seq.push(nums[i]);
      size++;
    } else {
      let left = 0;
      let right = size - 1;
      while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (seq[middle] <= nums[i]) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }

      seq[left] = nums[i];
    }
  }

  return n - size;
}

export { minimumOperations };
