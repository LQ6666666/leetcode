function threeSumClosest$(nums: number[], target: number): number {
  // 1. 排序
  nums.sort((a, b) => a - b);
  const len = nums.length;
  // 2. 计算初始和
  let ans = nums[0] + nums[1] + nums[2];

  // 3. 遍历
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    let left = i + 1,
      right = len - 1;

    // 当前项 + 后一项 + 最后一项
    // left 向后走
    // right 向前走
    while (left < right) {
      const sum = cur + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }

      // 如果相等
      if (sum === target) {
        return target;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ans;
}

function threeSumClosest(nums: number[], target: number): number {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  let ans = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = num + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
      }

      // 如果相等
      if (sum === target) {
        return target;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return ans;
}
