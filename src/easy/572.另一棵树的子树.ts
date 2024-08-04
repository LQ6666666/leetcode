import { TreeNode } from "../utils";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (subRoot === null || root === null) return false;

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(n1: TreeNode | null, n2: TreeNode | null): boolean {
  if (n1 === null || n2 === null) {
    return n1 === n2;
  }

  if (n1.val !== n2.val) {
    return false;
  }

  return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
}

export {};
