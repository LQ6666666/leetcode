import { TreeNode } from "src/utils";

function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];

  let queue: TreeNode[] = [];
  if (root) queue.push(root);

  while (queue.length) {
    const newQueue: TreeNode[] = [];

    let temp: number[] = [];
    for (const node of queue) {
      temp.push(node.val);

      if (node.left) {
        newQueue.push(node.left);
      }

      if (node.right) {
        newQueue.push(node.right);
      }
    }

    queue = newQueue;

    if (temp.length > 0) {
      ans.push(temp.at(-1)!);
    }
  }

  return ans;
}

export {rightSideView};
