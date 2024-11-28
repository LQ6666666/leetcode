import { TreeNode } from "@/utils";

function replaceValueInTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  const deepSum: number[] = [];
  getDeepSum(root, 0);
  getResult(root, 0);
  root.val = 0;
  return root;

  function getDeepSum(node: TreeNode | null, deep: number): void {
    if (node === null) return;

    deepSum[deep] ??= 0;
    deepSum[deep] += node.val;

    getDeepSum(node.left, deep + 1);
    getDeepSum(node.right, deep + 1);
  }

  function getResult(node: TreeNode | null, deep: number): void {
    if (node === null) return;
    const sum = (node.left?.val ?? 0) + (node.right?.val ?? 0);
    deep++;
    if (node.left) {
      node.left.val = deepSum[deep] - sum;
      getResult(node.left, deep);
    }
    if (node.right) {
      node.right.val = deepSum[deep] - sum;
      getResult(node.right, deep);
    }
  }
}

export {};
