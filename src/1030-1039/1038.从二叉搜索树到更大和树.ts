import { TreeNode } from "@/utils";

function bstToGst(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  return dfs(root), root;

  function dfs(node: TreeNode | null): void {
    if (node === null) return;
    dfs(node.right);
    node.val = sum += node.val;
    dfs(node.left);
  }
}

export { bstToGst };
