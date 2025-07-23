import { TreeNode } from "@/utils";

function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];
  let queue = root ? [root] : [];

  while (queue.length > 0) {
    ans.push(queue[queue.length - 1].val);

    const newQueue: TreeNode[] = [];
    for (const node of queue) {
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }
    queue = newQueue;
  }

  return ans;
}

export { rightSideView };
