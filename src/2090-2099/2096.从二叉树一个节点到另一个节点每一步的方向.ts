import { TreeNode } from "../utils";

function getDirections(root: TreeNode | null, startValue: number, destValue: number): string {
  if (root === null) return "";
  // 找到最近的公共祖先
  const ancestry = lowestCommonAncestor(root, startValue, destValue);
  if (ancestry === null) return "";

  if (ancestry.val === startValue) {
    return findDestNode(ancestry, "");
  } else if (ancestry.val === destValue) {
    return findStartNode(ancestry, "");
  }

  return findStartNode(ancestry, "") + findDestNode(ancestry, "");

  // 向下找
  function findDestNode(node: TreeNode | null, path: string): string {
    if (node === null) return "";

    if (node.val === destValue) return path;

    return findDestNode(node.left, path + "L") || findDestNode(node.right, path + "R");
  }

  // 向上找
  function findStartNode(node: TreeNode | null, path: string): string {
    if (node === null) return "";

    if (node.val === startValue) return path;

    return findStartNode(node.left, path + "U") || findStartNode(node.right, path + "U");
  }
}

// 236.二叉树的最近公共祖先
function lowestCommonAncestor(root: TreeNode | null, p: number, q: number): TreeNode | null {
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
    if ((left && right) || ((p === node.val || q === node.val) && (left || right))) {
      ans = node;
    }

    return left || right || p === node.val || q === node.val;
  }
}

export { getDirections };
