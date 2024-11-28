const MOD = 1000000007;

function sumSubarrayMins(arr: number[]): number {
  const n = arr.length;
  if (n === 0) return 0;
  // 利用单调栈向左找到第一个比 A[i] 小的数 A[left] （遍历顺序为 0 -> n-1)，也就是 E 辐射范围的左边界
  // 利用单调栈向右找到第一个比 A[i] 小的数 A[right]（遍历顺序为 n-1 -> 0)，也就是 E 辐射范围的右边界
  // 将每个元素的贡献值求和得到最终答案

  // 每个元素辐射范围的左边界
  const left = new Array<number>(n).fill(0);
  // 每个元素辐射范围的右边界
  const right = new Array<number>(n).fill(0);

  let stack: number[] = [];

  // 第一次循环先找到所有元素的左边界
  for (let i = 0; i < n; i++) {
    // 向左找第一个小于等于 E 的元素
    while (stack.length !== 0 && arr[stack.at(-1)!] > arr[i]) {
      stack.pop();
    }

    // 设立一个最左边界 -1
    if (stack.length === 0) {
      left[i] = -1;
    } else {
      left[i] = stack.at(-1)!;
    }

    // 下标入栈，方便同时得到 i 和 A[i]
    stack.push(i);
  }

  // 第二次循环找到所有元素的右边界
  stack = [];
  for (let i = n - 1; i >= 0; i--) {
    // 向右找第一个小于 E 的元素
    while (stack.length !== 0 && arr[stack.at(-1)!] >= arr[i]) {
      stack.pop();
    }

    // 设立一个最右边界 n
    if (stack.length === 0) {
      right[i] = n;
    } else {
      right[i] = stack.at(-1)!;
    }
    // 下标入栈，方便同时得到 i 和 A[i]
    stack.push(i);
  }

  // 按照贡献度计算即可
  // 注意此处 left[i] 和 right[i] 实际上记录的是左边界-1和右边界+1，和上面思路中有些区别，便于计算
  // 以 arr[i] 为最小元素的连续子序列的数量为 (i − j) * (k − i)
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = (ans + (i - left[i]) * (right[i] - i) * arr[i]) % MOD;
  }
  return ans;
}

// console.log(sumSubarrayMins([3, 1, 2, 4]));

export {};
