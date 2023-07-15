function fourSum$(nums: number[], target: number): number[][] {
  // 1.排序
  nums.sort((a, b) => a - b);

  const n = nums.length;
  const ans: number[][] = [];

  for (let i = 0; i < n; i++) {
    const a = nums[i];

    // 1 级剪枝处理
    if (a > target && a >= 0) {
      break;
    }

    // 第一层去重
    if (i > 0 && a === nums[i - 1]) {
      // i > 0  保证 i - 1 有值
      continue;
    }

    for (let j = i + 1; j < n; j++) {
      let b = nums[j];

      // 2 级剪枝处理
      if (a + b > target && a + b >= 0) {
        break;
      }

      // 第二层去重
      if (j - i > 1 && b === nums[j - 1]) {
        // j - i > 1  保证 j- 1 有值
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (right > left) {
        const c = nums[left];
        const d = nums[right];
        const sum = a + b + c + d;

        if (sum === target) {
          ans.push([a, b, c, d]);

          // 去重：连续重复的
          while (right > left && nums[left] === nums[left + 1]) {
            left++;
          }

          while (right > left && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }

  return ans;
}

function fourSum(nums: number[], target: number): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const ans: number[][] = [];

  for (let i = 0; i < n; i++) {
    const a = nums[i];

    if (a > target && a >= 0) {
      break;
    }

    // 第一层去重
    if (i > 0 && a === nums[i - 1]) {
      // i > 0  保证 i - 1 有值
      continue;
    }

    for (let j = i + 1; j < n; j++) {
      const b = nums[j];

      // 2 级剪枝处理
      if (a + b > target && a + b >= 0) {
        break;
      }

      // 第二层去重
      if (j - i > 1 && b === nums[j - 1]) {
        // j - i > 1  保证 j- 1 有值
        continue;
      }

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const c = nums[left];
        const d = nums[right];

        const sum = a + b + c + d;
        if (sum === target) {
          ans.push([a, b, c, d]);

          while (left < right && nums[left] === c) left++;
          while (left < right && nums[right] === d) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return ans;
}

export { fourSum };
