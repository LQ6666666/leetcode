import { TreeNode } from "../utils";

export { };

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
  if (root === null) return root;

  const value = root.val;
  if (value < low) {
    root = trimBST(root.right, low, high);
  } else if (value > high) {
    root = trimBST(root.left, low, high);
  } else {
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
  }

  return root;
};
