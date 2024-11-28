import { TreeNode } from "../utils";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === null) return null;

  let ans = null;

  return dfs(root), ans;

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return false;

    const left = dfs(node.left);
    const right = dfs(node.right);

    // p 和 q 在 root 的子树中, 且分列 root 的 异侧（即分别在左、右子树中）
    // p = root, 且 q 在 root 的左或右子树中
    // q = root, 且 p 在 root 的左或右子树中
    if ((left && right) || ((p === node || q === node) && (left || right))) {
      ans = node;
    }

    return left || right || p === node || q === node;
  }
}

export { lowestCommonAncestor };
