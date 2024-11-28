function nextPermutation(nums: number[]): void {
  const n = nums.length;
  if (n === 0) return;

  // 找降序序列的起点
  let i = n - 2;
  for (; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
  }

  // 整个序列都是降序序列，直接返回它的反转序列
  if (i === -1) {
    reverse(nums, 0, n - 1);
    return;
  }

  // 找到第一个大于 nums[i];
  let j = n - 1;
  for (; j >= i; j--) {
    if (nums[i] < nums[j]) {
      break;
    }
  }

  swap(nums, i, j);
  // 将降序序列转换为升序序列
  reverse(nums, i + 1, n - 1);
}

function reverse(nums: number[], start: number, end: number) {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

function swap(nums: number[], i: number, j: number) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

export {};
