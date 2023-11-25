import { TreeNode } from "@/utils";

function pseudoPalindromicPaths(root: TreeNode | null): number {
  let ans = 0;
  return dfs(root, new Set<number>()), ans;

  function dfs(node: TreeNode | null, countSet: Set<number>): void {
    if (node === null) return;

    if (countSet.has(node.val)) {
      countSet.delete(node.val);
    } else {
      countSet.add(node.val);
    }

    if (node.left === null && node.right === null) {
      if (countSet.size < 2) {
        ans++;
      }
      return;
    }

    dfs(node.left, new Set(countSet));
    dfs(node.right, new Set(countSet));
  }
}

export { pseudoPalindromicPaths };
