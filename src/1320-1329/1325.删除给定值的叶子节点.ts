import { TreeNode } from "@/utils";

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
  return dfs(root);

  function dfs(node: TreeNode | null): TreeNode | null {
    if (node === null) return null;

    if (node.left) {
      node.left = dfs(node.left);
    }

    if (node.right) {
      node.right = dfs(node.right);
    }

    if (node.left === null && node.right === null && node.val === target) {
      return null;
    }

    return node;
  }
}

export { removeLeafNodes };
