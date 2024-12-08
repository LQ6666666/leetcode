import { TreeNode } from "@/utils";

function sumOfLeftLeaves(root: TreeNode | null): number {
  return dfs(root, false);

  function dfs(node: TreeNode | null, isLeft: boolean): number {
    if (node === null) return 0;

    if (node.left === null && node.right === null) {
      return isLeft ? node.val : 0;
    }

    return dfs(node.left, true) + dfs(node.right, false);
  }
}

export { sumOfLeftLeaves };
