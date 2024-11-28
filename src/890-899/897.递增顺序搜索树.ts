import { TreeNode } from "@/utils";

function increasingBST(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  let prev: TreeNode | null = null;
  let head: TreeNode | null = null;
  dfs(root);
  return head;

  function dfs(node: TreeNode | null) {
    if (node === null) return node;
    const { left, right } = node;
    dfs(left);
    node.left = null;
    if (prev === null) {
      head = node;
    } else {
      prev.right = node;
    }
    prev = node;
    dfs(right);
  }
}

export { increasingBST };
