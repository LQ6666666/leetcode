import { TreeNode } from "src/utils";

function minimumOperations(root: TreeNode | null): number {
  let ans = 0;
  let queue: TreeNode[] = root ? [root] : [];

  while (queue.length) {
    const n = queue.length;
    const temp: number[] = [];
    const nextQueue: TreeNode[] = [];
    // 判断是否有序
    let flag = true;
    let prev = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < n; i++) {
      const { left, right, val } = queue[i];
      if (prev > val) {
        flag = false;
      }
      prev = val;
      temp.push(val);

      left && nextQueue.push(left);
      right && nextQueue.push(right);
    }
    queue = nextQueue;

    if (!flag) {
      // 计算每层排序所需的最少操作数目 => 最长递增子序列个数
      const count = getMinSwaps(temp);
      ans += count;
    }
  }

  return ans;
}

function getMinSwaps(arr: number[]): number {
  const n = arr.length;
  const sortArr = arr.slice();

  sortArr.sort((a, b) => a - b);
  // 排序后的索引映射
  const indexMap = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    indexMap.set(sortArr[i], i);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    // 不断交互
    while (sortArr[i] !== arr[i]) {
      swap(arr, i, indexMap.get(arr[i])!);
      count++;
    }
  }

  return count;
}

function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
