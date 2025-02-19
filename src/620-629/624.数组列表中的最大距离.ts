function maxDistance(arrays: number[][]): number {
  const n = arrays.length;
  // 初始化最小值和最大值为第一个数组的最小值和最大值
  let firstMin = arrays[0][0];
  let firstMax = arrays[0][arrays[0].length - 1];
  // 记录它们的索引
  let indexMin = 0;
  let indexMax = 0;
  // 初始化次小值和次大值为极大值和极小值
  let secondMin = Number.MAX_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < n; i++) {
    const array = arrays[i];
    const max = array[array.length - 1];
    const min = array[0];

    if (max > firstMax) {
      secondMax = firstMax;
      firstMax = max;
      indexMax = i;
    } else if (max > secondMax) {
      secondMax = max;
    }

    if (min < firstMin) {
      secondMin = firstMin;
      firstMin = min;
      indexMin = i;
    } else if (min < secondMin) {
      secondMin = min;
    }
  }

  // 最大值和最小值在一个数组, 返回次大值与最小值或最大值与次小值的最大差值
  if (indexMin === indexMax) {
    return Math.max(firstMax - secondMin, secondMax - firstMin);
  } else {
    return firstMax - firstMin;
  }
}

export { maxDistance };
