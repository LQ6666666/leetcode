import { TreeNode } from "@/utils";

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  let queue: TreeNode[] = root ? [root] : [];
  let level = 0;
  let sums: number[] = [];

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    let sum = 0;
    for (const node of queue) {
      sum += node.val;
      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }

    queue = newQueue;
    level++;
    sums.push(sum);
  }

  if (level < k) return -1;
  sums.sort((a, b) => b - a);

  return sums[k - 1];
}

export {};
