import { TreeNode } from "../utils";

function btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {
  // A 选了第一个节点后，将树划分为了三个部分（可能为空）
  // 第一部分：left
  let left = 0;
  // 第二部分：right
  let right = 0;
  // 第三部分：n - (left + right) - 1
  const total = getTreeSize(root);
  const rest = n - (left + right) - 1;
  // 只需要总结点的数的一半 < 三个部分中的最大值，B 就可以获胜
  return total / 2 < Math.max(left, right, rest);

  function getTreeSize(node: TreeNode | null): number {
    if (node === null) return 0;

    const l = getTreeSize(node.left);
    const r = getTreeSize(node.right);

    if (node.val === x) {
      left = l;
      right = r;
    }

    return l + r + 1;
  }
}

export { btreeGameWinningMove };
