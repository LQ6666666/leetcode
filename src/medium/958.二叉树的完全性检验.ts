import { TreeNode } from "@/utils";

function isCompleteTree(root: TreeNode | null): boolean {
  let queue: TreeNode[] = [];
  root && queue.push(root);

  let flag = false;

  while (queue.length) {
    const newQueue: TreeNode[] = [];
    for (const node of queue) {
      // 左空右有
      if (!node.left && node.right) {
        return false;
      }

      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);

      // flag 为真，再有节点存在左右孩子就错误了
      if (flag === true && (node.left || node.right)) {
        return false;
      }

      // 左空或右空，说明走到叶了，flag = true
      if (!node.left || !node.right) {
        flag = true;
      }
    }
    queue = newQueue;
  }

  return true;
}

export { isCompleteTree };
