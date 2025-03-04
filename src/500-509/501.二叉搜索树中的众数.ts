import { TreeNode } from "@/utils";

function findMode(root: TreeNode | null): number[] {
  let ans: number[] = [];
  let count = 0;
  let maxCount = 0;
  let prev = Number.MIN_SAFE_INTEGER;

  dfs(root);

  return ans;

  function dfs(node: TreeNode | null) {
    if (node === null) return;

    dfs(node.left);

    if (node.val === prev) {
      count++;
    } else {
      count = 1;
    }

    if (count > maxCount) {
      ans = [node.val];
      maxCount = count;
    } else if (maxCount === count) {
      ans.push(node.val);
    }

    prev = node.val;

    dfs(node.right);
  }
}

export { findMode };
