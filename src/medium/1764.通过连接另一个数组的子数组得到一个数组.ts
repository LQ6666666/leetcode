function canChoose(groups: number[][], nums: number[]): boolean {
  const n = groups.length;
  const m = nums.length;

  // 当前的 groups 的下标
  let i = 0,
    // 当前 nums 的下标
    j = 0;

  while (i < n && j < m) {
    if (check(groups[i], nums, j)) {
      // 将指针 j 往后移动 groups[i].length 位
      // 保证下次依次对比的位置
      j += groups[i].length;

      i++;
    } else {
      j++;
    }
  }

  return i === n;
}

function check(group: number[], nums: number[], j: number) {
  const n = group.length;
  const m = nums.length;

  let i = 0;
  // 依次比较
  while (i < n && j < m) {
    if (group[i] !== nums[j]) {
      return false;
    }

    i++, j++;
  }

  return i === n;
}

export { canChoose };
