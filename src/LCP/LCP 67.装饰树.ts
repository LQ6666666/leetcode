import { TreeNode } from "@/utils";

function expandBinaryTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  if (root.left) {
    root.left = new TreeNode(-1, expandBinaryTree(root.left), null);
  }

  if (root.right) {
    root.right = new TreeNode(-1, null, expandBinaryTree(root.right));
  }

  return root;
}

export {};
