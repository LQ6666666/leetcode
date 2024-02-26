import { TreeNode } from "src/utils";

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) return 0;

  if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  }

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  }

  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}

export { rangeSumBST };
