import { TreeNode } from "@/utils";

function isValidBST(root: TreeNode | null): boolean {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}

function helper(node: TreeNode | null, min: number, max: number): boolean {
  if (node === null) return true;

  if (node.val <= min || node.val >= max) {
    return false;
  }

  return helper(node.left, min, node.val) && helper(node.right, node.val, max);
}

export { isValidBST };
