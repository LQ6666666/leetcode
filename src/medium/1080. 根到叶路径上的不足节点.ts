import { TreeNode } from "@/utils";

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  if (root === null) return null;

  const { val } = root;
  if (root.left === null && root.right === null) {
    return val < limit ? null : root;
  }

  root.left = sufficientSubset(root.left, limit - val);
  root.right = sufficientSubset(root.right, limit - val);

  return root.left === null && root.right === null ? null : root;
}

export {};
