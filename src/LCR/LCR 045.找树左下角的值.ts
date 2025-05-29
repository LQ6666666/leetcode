import { TreeNode } from "@/utils";

function findBottomLeftValue(root: TreeNode | null): number {
  let queue: TreeNode[] = root ? [root] : [];
  let ans = -1;
  while (queue.length > 0) {
    const newQueue: TreeNode[] = [];
    for (const node of queue) {
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }

    ans = queue[0].val;
    queue = newQueue;
  }

  return ans;
}

export { findBottomLeftValue };
