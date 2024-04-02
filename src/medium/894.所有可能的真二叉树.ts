import { TreeNode } from "@/utils";

function allPossibleFBT(n: number): Array<TreeNode | null> {
  const ans: TreeNode[] = [];
  if (n === 1) {
    ans.push(new TreeNode(0));
    return ans;
  }
  // 偶数构建不成二叉树
  if (n % 2 === 0) return ans;

  for (let i = 1; i <= n - 2; i += 2) {
    const lefts = allPossibleFBT(i);
    const rights = allPossibleFBT(n - i - 1);
    for (const l of lefts) {
      for (const r of rights) {
        ans.push(new TreeNode(0, l, r));
      }
    }
  }

  return ans;
}

export {};
