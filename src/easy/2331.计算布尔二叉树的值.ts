import { TreeNode } from "@/utils";

function evaluateTree(root: TreeNode | null): boolean {
  if (root === null) return true;

  if (root.left && root.right) {
    return root.val === 2
      ? evaluateTree(root.left) || evaluateTree(root.right)
      : evaluateTree(root.left) && evaluateTree(root.right);
  }

  return !!root.val;
}

export { evaluateTree };
