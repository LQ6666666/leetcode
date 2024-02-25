import { TreeNode } from "@/utils";

function largestValues(root: TreeNode | null): number[] {
  const ans: number[] = [];
  let queue: TreeNode[] = root ? [root] : [];

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    let max = Number.MIN_SAFE_INTEGER;
    for (const node of queue) {
      max = Math.max(max, node.val);
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    ans.push(max);
    queue = newQueue;
  }

  return ans;
}

export { largestValues };
