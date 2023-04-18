import { TreeNode } from "@/utils";

function maxAncestorDiff(root: TreeNode | null): number {
  let ans = 0;
  if (root === null) return ans;

  return dfs(root, root.val, root.val), ans;

  function dfs(node: TreeNode | null, max: number, min: number): void {
    if (node === null) return;

    max = Math.max(max, node.val);
    min = Math.min(min, node.val);

    dfs(node.left, max, min);
    dfs(node.right, max, min);

    ans = Math.max(ans, max - min);
  }
}

export {};
