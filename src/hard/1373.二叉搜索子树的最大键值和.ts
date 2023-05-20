import { TreeNode } from "@/utils";

const { MAX_SAFE_INTEGER: MAX, MIN_SAFE_INTEGER: MIN } = Number;

class SubTree {
  constructor(
    public isBST: boolean,
    public minValue: number,
    public maxValue: number,
    public sumValue: number
  ) {}
}

function maxSumBST(root: TreeNode | null): number {
  let ans = 0;
  return dfs(root), ans;

  function dfs(node: TreeNode | null): SubTree {
    if (node === null) {
      return new SubTree(true, MAX, MIN, 0);
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (left.isBST && right.isBST && node.val > left.maxValue && node.val < right.minValue) {
      const sumValue = node.val + left.sumValue + right.sumValue;
      ans = Math.max(ans, sumValue);
      const minValue = Math.min(node.val, left.minValue);
      const maxValue = Math.max(node.val, right.maxValue);
      return new SubTree(true, minValue, maxValue, sumValue);
    } else {
      return new SubTree(false, 0, 0, 0);
    }
  }
}

export {};
