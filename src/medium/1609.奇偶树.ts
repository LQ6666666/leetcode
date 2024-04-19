import { TreeNode } from "@/utils";

function isEvenOddTree(root: TreeNode | null): boolean {
  let queue: TreeNode[] = [];

  if (root) {
    queue.push(root);
  }

  let level = 0;
  while (queue.length) {
    const newQueue: TreeNode[] = [];

    let prev = level % 2 === 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
    for (const node of queue) {
      if (level % 2 === 0) {
        if (node.val % 2 === 0) return false;

        if (node.val <= prev) return false;
      } else {
        if (node.val % 2 !== 0) return false;

        if (node.val >= prev) return false;
      }

      prev = node.val;

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }

    level++;
    queue = newQueue;
  }

  return true;
}

export { isEvenOddTree };
