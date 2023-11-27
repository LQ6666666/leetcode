import { TreeNode } from "@/utils";

function countNodes$(root: TreeNode | null): number {
  return root === null ? 0 : 1 + (countNodes$(root.left) + countNodes$(root.right));
}

function countNodes(root: TreeNode | null): number {
  if (root === null) return 0;
  if (root.left === null && root.right === null) return 1;

  let leftHeight = 0;
  let left: TreeNode | null = root;
  while (left) {
    leftHeight++;
    left = left.left;
  }

  let rightHeight = 0;
  let right: TreeNode | null = root;
  while (right) {
    rightHeight++;
    right = right.right;
  }

  if (leftHeight === rightHeight) {
    return 2 ** leftHeight - 1;
  }

  return 1 + (countNodes(root.left) + countNodes(root.right));
}

export { countNodes };
