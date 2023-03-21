import { TreeNode } from "@/utils";

function convertBiNode(root: TreeNode | null): TreeNode | null {
  let head: TreeNode | null = null;
  let prev: TreeNode | null = null;

  function dfs(node: TreeNode | null) {
    if (node === null) return null;
    dfs(node.left);
    if (head === null) head = node;
    if (prev) {
      prev.right = node;
    }
    node.left = null;
    prev = node;
    dfs(node.right);
  }

  dfs(root);
  return head;
}
export {};
