import { TreeNode } from "../utils";

function goodNodes$(root: TreeNode | null): number {
  if (root === null) return 0;

  let ans = 0;
  function recursion(node: TreeNode, maxVal: number) {
    const value = node.val;
    if (value >= maxVal) {
      ans++;
    } else {
      maxVal = value;
    }

    if (node.left) {
      recursion(node.left, maxVal);
    }

    if (node.right) {
      recursion(node.right, maxVal);
    }
  }

  recursion(root, root.val);
  return ans;
}

function goodNodes(root: TreeNode | null): number {
  let ans: number = 0;
  return dfs(root, Number.MIN_SAFE_INTEGER), ans;

  function dfs(node: TreeNode | null, maxVal: number) {
    if (node === null) return;

    if (node.val >= maxVal) {
      ans++;
    }

    maxVal = Math.max(node.val, maxVal);

    if (node.left) {
      dfs(node.left, maxVal);
    }

    if (node.right) {
      dfs(node.right, maxVal);
    }
  }
}

export {};
