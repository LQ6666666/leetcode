import { TreeNode } from "@/utils";

// 判断 T2 是否为 T1 的子树
function checkSubTree(t1: TreeNode | null, t2: TreeNode | null): boolean {
  let queue: TreeNode[] = t1 ? [t1] : [];
  while (queue.length) {
    const newQueue: TreeNode[] = [];
    for (const node of queue) {
      if (checkSame(node, t2)) {
        return true;
      }

      node.left && newQueue.push(node.left);
      node.right && newQueue.push(node.right);
    }
    queue = newQueue;
  }

  return false;
}

// t1 和 t2 是否相似
function checkSame(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  if (t1.val !== t2.val) return false;

  return checkSame(t1.left, t2.left) && checkSame(t1.right, t2.right);
}

export { checkSubTree };
