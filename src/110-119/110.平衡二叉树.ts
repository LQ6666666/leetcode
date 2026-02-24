import { TreeNode } from "../utils";

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;

  if (Math.abs(helper(root.left) - helper(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

function helper(node: TreeNode | null): number {
  if (node === null) return 0;

  const leftHeight = helper(node.left);
  const rightHeight = helper(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

export {};
