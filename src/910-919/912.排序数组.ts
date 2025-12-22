function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

function quickSort(nums: number[], left: number, right: number) {
  // 优化：如果子数组已是升序，直接返回
  let ordered = true;
  for (let i = left; i < right; i++) {
    if (nums[i] > nums[i + 1]) {
      ordered = false;
      break;
    }
  }
  if (ordered) return;

  const i = partition(nums, left, right); // 划分子数组
  quickSort(nums, left, i - 1); // 排序在 pivot 左侧的元素
  quickSort(nums, i + 1, right); // 排序在 pivot 右侧的元素
}

function partition(nums: number[], left: number, right: number) {
  // 1. 在子数组 [left, right] 中随机选择一个基准元素 pivot
  const idx = left + Math.floor(Math.random() * (right - left + 1));
  const pivot = nums[idx];
  // 把 pivot 与子数组第一个元素交换，避免 pivot 干扰后续划分，从而简化实现逻辑
  [nums[idx], nums[left]] = [nums[left], nums[idx]];

  // 2. 相向双指针遍历子数组 [left + 1, right]
  // 循环不变量：在循环过程中，子数组的数据分布始终如下图
  // [ pivot | <=pivot | 尚未遍历 | >=pivot ]
  //   ^                 ^     ^         ^
  //   left              i     j         right

  let i = left + 1;
  let j = right;
  while (true) {
    while (i <= j && nums[i] < pivot) {
      i++;
    }
    // 此时 nums[i] >= pivot

    while (i <= j && nums[j] > pivot) {
      j--;
    }
    // 此时 nums[j] <= pivot

    if (i >= j) {
      break;
    }

    // 维持循环不变量
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }

  // 3. 把 pivot 与 nums[j] 交换，完成划分（partition）
  // 为什么与 j 交换？
  // 如果与 i 交换，可能会出现 i = right + 1 的情况，已经下标越界了，无法交换
  // 另一个原因是如果 nums[i] > pivot，交换会导致一个大于 pivot 的数出现在子数组最左边，不是有效划分
  // 与 j 交换，即使 j = left，交换也不会出错
  [nums[left], nums[j]] = [nums[j], nums[left]];

  // 返回 pivot 的下标
  return j;
}

/**
 * 冒泡排序
 * @param nums 需要排序的数组
 * @returns 排序后的数组
 */
function bubblingSort(nums: number[]): number[] {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let flag = true;
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > nums[j]) {
        flag = false;
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
    }
    if (flag) {
      break;
    }
  }

  return nums;
}

export {};
