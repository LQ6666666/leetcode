function canSortArray(nums: number[]): boolean {
  /** 表示当前元素组二进制下数位为 1 的数目 */
  let lastCnt = 0;
  // 来表示上一个组的最大值
  let lastGroupMax = 0;
  /* 来表示当前组的最大值 */
  let curGroupMax = 0;

  for (const num of nums) {
    /* 表示当前元素二进制下数位为 1 的数目 */
    const curCnt = countBits(num);
    if (curCnt === lastCnt) {
      curGroupMax = Math.max(curGroupMax, num);
    }
    // 如果进入了一个新的组
    else {
      lastCnt = curCnt;
      lastGroupMax = curGroupMax;
      curGroupMax = num;
    }
    // 判断当前元素是否大于上一个组的元素的最大值
    if (num < lastGroupMax) {
      return false;
    }
  }
  return true;
}

const countBits = (num: number) => {
  let count = 0;
  while (num !== 0) {
    if ((num & 1) === 1) {
      count++;
    }
    num >>= 1;
  }
  return count;
};
export { canSortArray };
