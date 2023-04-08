import { TreeNode } from "@/utils";

function $sumNumbers(root: TreeNode | null): number {
  let ans = 0;
  dfs(root, []);
  return ans;

  function dfs(node: TreeNode | null, nums: number[]) {
    if (node === null) return;
    nums = nums.concat(node.val);

    if (node.left === null && node.right === null) {
      let num = 0;
      const n = nums.length;
      for (let j = 0; j < n; j++) {
        num += nums[j] * 10 ** (n - j - 1);
      }
      ans += num;
    } else {
      dfs(node.left, nums);
      dfs(node.right, nums);
    }
  }
}

function sumNumbers(root: TreeNode | null): number {
  let ans = 0;
  dfs(root, 0);
  return ans;

  function dfs(node: TreeNode | null, nums: number) {
    if (node === null) return;

    nums += node.val;
    if (node.left === null && node.right === null) {
      ans += nums;
    } else {
      dfs(node.left, nums * 10);
      dfs(node.right, nums * 10);
    }
  }
}

export {};
