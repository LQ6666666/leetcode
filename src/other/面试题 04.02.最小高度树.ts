import { TreeNode } from "../utils";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const n = nums.length;
  if (n === 0) return null;

  const middleIndex = n >> 1;
  const node = new TreeNode(nums[middleIndex]);

  node.left = sortedArrayToBST(nums.slice(0, middleIndex));
  node.right = sortedArrayToBST(nums.slice(middleIndex + 1, n));

  return node;
}

export { sortedArrayToBST };
