import { TreeNode } from "@/utils";

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) return 0;

  return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
}

function dfs(node: TreeNode | null, targetSum: number): number {
  if (node === null) return 0;

  let ret = 0;
  if (node.val === targetSum) {
    ret++;
  }

  ret += dfs(node.left, targetSum - node.val);
  ret += dfs(node.right, targetSum - node.val);
  return ret;
}

export { pathSum };
