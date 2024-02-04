// 暴力
function findClosedNumbers$(num: number): [number, number] {
  const count = helper(num);
  let min = -1;

  for (let i = num - 1; i >= -2147483647; i--) {
    if (count === helper(i)) {
      min = i;
      break;
    }
  }

  let max = -1;
  for (let i = num + 1; i <= 2147483647; i++) {
    if (count === helper(i)) {
      max = i;
      break;
    }
  }

  return [max, min];

  function helper(n: number): number {
    let count = 0;
    let x = Math.abs(n);
    while (x) {
      if ((x & 1) === 1) {
        count++;
      }
      x >>= 1;
    }
    return count;
  }
}

function findClosedNumbers(num: number): [number, number] {
  const ans: [number, number] = [-1, -1];
  // 先找小的,先找到第一个右边有 0 的 1 位置，让其往右边移动一位，再让右边的所有 1 都移动到顶端
  let index = -1;
  let count = -1;
  let flag = false;
  for (let i = 0; i < 32; i++) {
    if (((1 << i) & num) !== 0) {
      count++;
      if (flag) {
        index = i;
        break;
      }
    } else {
      flag = true;
    }
  }
  if (!flag || index === -1) {
    ans[1] = -1;
  } else {
    let min = (Number.MAX_SAFE_INTEGER - (1 << (index + 1)) + 1) & num;
    while (count >= 0) {
      min |= 1 << (index - count - 1);
      count--;
    }
    ans[1] = min;
  }

  // ===============找大的====================
  // 大的就是，找到第一个左边有 0 的 1，让其右移一位，令其右边的 1，全都放置到最低位
  index = -1;
  count = 0;
  for (let i = 0; i < 30; i++) {
    if (((1 << i) & num) !== 0 && ((1 << (i + 1)) & num) === 0) {
      index = i;
      break;
    }
    if (((1 << i) & num) != 0) count++;
  }
  if (index === -1) {
    ans[0] = -1;
    return ans;
  }
  let maxNum = (num >> (index + 1)) << (index + 1);
  maxNum |= 1 << (index + 1);
  while (count > 0) {
    maxNum |= 1 << (count - 1);
    count--;
  }
  ans[0] = maxNum;
  return ans;
}

export { findClosedNumbers };
