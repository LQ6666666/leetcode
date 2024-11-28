import { TreeNode } from "../utils";

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    const n = nums.length;
    if (n === 0) return null;

    let max = nums[0], idx = 0;

    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (num > max) {
            max = num;
            idx = i;
        }
    }

    const leftArr = nums.slice(0, idx);
    const rightArr = nums.slice(idx + 1);
    const node = new TreeNode(nums[idx]);

    node.left = constructMaximumBinaryTree(leftArr);
    node.right = constructMaximumBinaryTree(rightArr);

    return node;
};

export { };