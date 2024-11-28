import { TreeNode } from "@/utils";

function minDiffInBST(root: TreeNode | null): number {
  let prev: TreeNode | null = null;
  let ans = Number.MAX_SAFE_INTEGER;
  return dfs(root), ans;

  function dfs(node: TreeNode | null) {
    if (node === null) return;
    dfs(node.left);
    if (prev !== null) {
      ans = Math.min(ans, node.val - prev.val);
    }
    prev = node;
    dfs(node.right);
  }
}

export {};
