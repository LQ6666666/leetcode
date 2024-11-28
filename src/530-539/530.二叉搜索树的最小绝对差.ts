import { TreeNode } from "@/utils";

function getMinimumDifference(root: TreeNode | null): number {
  const arr: number[] = [];
  const inorder = (node: TreeNode | null) => {
    if (node === null) return;

    inorder(node.left);
    arr.push(node.val);
    inorder(node.right);
  };

  inorder(root);

  const n = arr.length;
  let ans = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n; i++) {
    ans = Math.min(ans, arr[i] - arr[i - 1]);
  }
  return ans;
}

export {};
