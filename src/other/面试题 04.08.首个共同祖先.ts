import { TreeNode } from "@/utils";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;
  let ans: TreeNode | null = null;
  return dfs(root), ans;

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return false;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if ((left && right) || ((p === node || q === node) && left) || right) {
      ans = root;
    }

    return left || right || p === node || q === node;
  }
}

export { lowestCommonAncestor };
