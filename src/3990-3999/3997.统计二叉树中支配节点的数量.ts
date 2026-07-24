import { TreeNode } from "@/utils";

function countDominantNodes(root: TreeNode | null): number {
  let ans = 0;
  dfs(root);
  return ans;

  function dfs(node: TreeNode | null): number {
    if (node === null) return Number.MIN_SAFE_INTEGER;

    const l = dfs(node.left);
    const r = dfs(node.right);

    if (node.val >= l && node.val >= r) {
      ans++;
    }

    return Math.max(l, r, node.val);
  }
}

export {};
