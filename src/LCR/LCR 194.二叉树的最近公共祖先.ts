import { TreeNode } from "@/utils";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let ans: TreeNode | null = null;
  dfs(root);
  return ans;

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return false;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if ((left && right) || ((p === node || q === node) && (left || right))) {
      ans = node;
    }

    return left || right || p === node || q === node;
  }
}

export { lowestCommonAncestor };
