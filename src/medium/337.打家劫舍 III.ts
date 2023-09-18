// 选当前节点时，以当前节点为根的子树最大点权和
// 不选当前节点时，以当前节点为根的子树最大点权和

import { TreeNode } from "@/utils";

function rob(root: TreeNode | null): number {
  // 最终答案 = max(根选, 根不选)
  return Math.max(...dfs(root));

  function dfs(root: TreeNode | null): [rob: number, notRob: number] {
    if (root === null) return [0, 0];

    const [leftRob, leftNotRob] = dfs(root.left);
    const [rightRob, rightNotRob] = dfs(root.right);

    // 选 = 左不选 + 右不选 + 当前节点值
    const rob = leftNotRob + rightNotRob + root.val;
    // 不选 = max(左选, 左不选) + max(右选,右不选)
    const notRob = Math.max(leftRob, leftNotRob) + Math.max(rightRob, rightNotRob);

    return [rob, notRob];
  }
}
