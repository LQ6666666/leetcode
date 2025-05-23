import { TreeNode } from "@/utils";

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (root.left === null && root.right === null && root.val === 0) {
    return null;
  }

  return root;
}

export { pruneTree };
