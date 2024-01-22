import { TreeNode } from "@/utils";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 1;
  dfs(root);
  return ans - 1;

  function dfs(node: TreeNode | null): number {
    if (node === null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    ans = Math.max(ans, left + right + 1);
    return Math.max(left, right) + 1;
  }
}

export {};
