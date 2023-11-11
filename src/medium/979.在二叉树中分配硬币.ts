import { TreeNode } from "@/utils";

function distributeCoins(root: TreeNode | null): number {
  let ans = 0;
  return dfs(root), ans;

  function dfs(node: TreeNode | null): [coins: number, nodes: number] {
    if (node === null) return [0, 0];

    const [coinsL, nodesL] = dfs(node.left);
    const [coinsR, nodesR] = dfs(node.right);
    const coins = coinsL + coinsR + node.val;
    const nodes = nodesL + nodesR + 1;
    ans += Math.abs(coins - nodes);

    return [coins, nodes];
  }
}

export { distributeCoins };
