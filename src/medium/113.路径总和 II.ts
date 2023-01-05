function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const ans: number[][] = [];

  function dfs(node: TreeNode | null, sum: number, path: number[]) {
    if (node === null) return;

    path.push(node.val);
    sum += node.val;
    if (node.left === null && node.right === null && sum === targetSum) {
      return ans.push(path.slice());
    }

    dfs(node.left, sum, path.slice());
    dfs(node.right, sum, path.slice());
  }

  dfs(root, 0, []);

  return ans;
}

export {};
