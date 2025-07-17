import { TreeNode } from "@/utils";

function increasingBST(root: TreeNode | null): TreeNode | null {
  let prev: TreeNode | null = null;
  let head: TreeNode | null = null;
  function dfs(node: TreeNode | null): void {
    if (node === null) return;
    dfs(node.left);
    if (prev === null) {
      head = node;
    } else {
      prev.right = node;
    }
    prev = node;
    dfs(node.right);
    node.left = null;
  }
  dfs(root);
  return head;
}

export { increasingBST };
