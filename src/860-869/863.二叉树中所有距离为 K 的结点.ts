import { TreeNode } from "@/utils";

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
  const parentMap = new Map<number, TreeNode | null>();
  const ans: number[] = [];
  if (root) {
    findParent(root);
    parentMap.set(root.val, null);
    dfs(target, null, 0);
  }
  return ans;

  function findParent(node: TreeNode): void {
    if (node.left) {
      parentMap.set(node.left.val, node);
      findParent(node.left);
    }
    if (node.right) {
      parentMap.set(node.right.val, node);
      findParent(node.right);
    }
  }

  function dfs(node: TreeNode | null, form: TreeNode | null, depth: number): void {
    if (node === null) {
      return;
    }
    if (depth === k) {
      ans.push(node.val);
      return;
    }
    const nextDepth = depth + 1;
    if (node.left !== form) {
      dfs(node.left, node, nextDepth);
    }
    if (node.right !== form) {
      dfs(node.right, node, nextDepth);
    }
    if (parentMap.get(node.val) !== form) {
      dfs(parentMap.get(node.val)!, node, nextDepth);
    }
  }
}

export {};
