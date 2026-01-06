import { TreeNode } from "../utils";

function maxLevelSum(root: TreeNode | null): number {
  if (root === null) return 0;

  let ans = 1;
  let sum = root.val;

  let queue: TreeNode[] = [root];
  let level = 1;

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    let temp = 0;

    for (const node of queue) {
      temp += node.val;
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }

    if (temp > sum) {
      sum = temp;
      ans = level;
    }

    queue = newQueue;
    level++;
  }

  return ans;
}

export {};
