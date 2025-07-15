import { TreeNode } from "@/utils";

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  return dfs(root);

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return false;
    if (set.has(k - node.val)) {
      return true;
    }
    set.add(node.val);
    return dfs(node.left) || dfs(node.right);
  }
}

export { findTarget };
