import { TreeNode } from "src/utils";

function sumNumbers(root: TreeNode | null): number {
  let ans = 0;
  return dfs(root, 0), ans;

  function dfs(node: TreeNode | null, sum: number) {
    if (node === null) return;
    sum = sum * 10 + node.val;

    if (node.left === null && node.right === null) {
      ans += sum;
      return;
    }

    dfs(node.left, sum);
    dfs(node.right, sum);
  }
}

export {};
