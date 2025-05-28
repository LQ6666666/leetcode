import { TreeNode } from "@/utils";

function numColor(root: TreeNode | null): number {
  const set = new Set<number>();
  return dfs(root), set.size;

  function dfs(node: TreeNode | null): void {
    if (node === null) return;
    set.add(node.val);
    dfs(node.left);
    dfs(node.right);
  }
}

export { numColor };
