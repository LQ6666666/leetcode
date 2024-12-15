import { MOD, TreeNode } from "@/utils";

function maxProduct(root: TreeNode | null): number {
  const sum = getSum(root);
  let ans = Number.MIN_SAFE_INTEGER;
  dfs(root);
  return ans % MOD;

  function dfs(node: TreeNode | null): number {
    if (node === null) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    const subSum = left + right + node.val;
    // 乘积 = 某个节点下所有子节点的和 *（整个树的和 - 某个节点下所有子节点的和）
    ans = Math.max(ans, (sum - subSum) * subSum);

    return subSum;
  }
}

function getSum(node: TreeNode | null): number {
  if (node === null) return 0;
  return node.val + getSum(node.left) + getSum(node.right);
}

export { maxProduct };
