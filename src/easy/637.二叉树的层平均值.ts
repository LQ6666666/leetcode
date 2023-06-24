import { TreeNode } from "@/utils";

function averageOfLevels(root: TreeNode | null): number[] {
  const ans: number[] = [];

  let queue: TreeNode[] = root ? [root] : [];
  while (queue.length) {
    const newQueue: TreeNode[] = [];
    let sum = 0;
    for (const node of queue) {
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
      sum += node.val;
    }
    ans.push(sum / queue.length);
    queue = newQueue;
  }

  return ans;
}

export { averageOfLevels };
