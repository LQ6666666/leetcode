import { TreeNode } from "../utils";

function zigzagLevelOrder$(root: TreeNode | null): number[][] {
  const queue: TreeNode[] = [];
  const ans: number[][] = [];

  if (root !== null) queue.push(root);

  let flag = true;
  while (queue.length > 0) {
    let i = queue.length;
    let temp: number[] = [];

    while (i-- > 0) {
      const node = queue.shift()!;
      temp[flag ? "push" : "unshift"](node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    flag = !flag;
    ans.push(temp);
  }

  return ans;
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let queue: TreeNode[] = root ? [root] : [];
  const ans: number[][] = [];

  let flag = false;
  while (queue.length) {
    const newQueue: TreeNode[] = [];

    const t: number[] = [];
    for (const node of queue) {
      t.push(node.val);
      if (node.left) {
        newQueue.push(node.left);
      }
      if (node.right) {
        newQueue.push(node.right);
      }
    }

    if (flag) {
      t.reverse();
    }

    flag = !flag;
    ans.push(t);
    queue = newQueue;
  }

  return ans;
}

export { zigzagLevelOrder };
