import { TreeNode } from "@/utils";

function subtreeWithAllDeepest(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const leftDepth = depth(root.left);
  const rightDepth = depth(root.right);

  if (leftDepth === rightDepth) {
    return root;
  } else if (leftDepth > rightDepth) {
    return subtreeWithAllDeepest(root.left);
  } else {
    return subtreeWithAllDeepest(root.right);
  }
}

function depth(node: TreeNode | null): number {
  if (node === null) return 0;
  return Math.max(depth(node.left), depth(node.right)) + 1;
}

export {};
