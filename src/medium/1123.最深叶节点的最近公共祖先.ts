import { TreeNode } from "@/utils";

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let ans: TreeNode | null = null;
  // 全局最大深度
  let maxDepth = -1;
  dfs(root, 0);
  return ans;

  function dfs(node: TreeNode | null, depth: number): number {
    if (node === null) {
      maxDepth = Math.max(maxDepth, depth);
      return depth;
    }

    // 获取左子树最深叶节点的深度
    const leftMaxDepth = dfs(node.left, depth + 1);
    // 获取右子树最深叶节点的深度
    const rightMaxDepth = dfs(node.right, depth + 1);

    // 叶子节点 和 最近的公共 都会进去
    if (leftMaxDepth === rightMaxDepth && rightMaxDepth === maxDepth) {
      ans = node;
    }

    // 当前子树最深叶节点的深度
    return Math.max(leftMaxDepth, rightMaxDepth);
  }
}

export {};
