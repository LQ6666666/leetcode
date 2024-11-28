import { TreeNode } from "../utils";

export { };

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const n = nums.length;
  if (n === 0) return null;

  const middleIndex = nums.length >> 1;
  const middle = nums[middleIndex];
  const leftNums = nums.slice(0, middleIndex);
  const rightNums = nums.slice(middleIndex + 1);

  const root = new TreeNode(middle);
  root.left = sortedArrayToBST(leftNums);
  root.right = sortedArrayToBST(rightNums);

  return root;
};
