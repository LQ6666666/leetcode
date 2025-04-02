import { TreeNode } from "@/utils";

function averageOfSubtree(root: TreeNode | null): number {
  let ans = 0;
  dfs(root);
  return ans;

  function dfs(node: TreeNode | null): [sum: number, count: number] {
    if (node === null) return [0, 0];

    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);

    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;

    if (Math.floor(sum / count) === node.val) {
      ans++;
    }

    return [sum, count];
  }
}

export { averageOfSubtree };
