import { TreeNode } from "@/utils";

function maxPathSum(root: TreeNode | null): number {
  let ans = Number.MIN_SAFE_INTEGER;
  return dfs(root), ans;

  function dfs(node: TreeNode | null): number {
    if (node === null) return 0;

    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);

    ans = Math.max(ans, node.val + left + right);

    return node.val + Math.max(left, right);
  }
}

export {};
