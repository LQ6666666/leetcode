import { TreeNode } from '../utils';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root === null) return false;

    function recursion(node: TreeNode, sum: number): boolean {
        sum += node.val;
        // 叶子节点
        if (node.left === null && node.right === null) {
            return sum === targetSum;
        }

        let leftResult = false;
        if (node.left) {
            leftResult = recursion(node.left, sum);
        }

        let rightResult = false;
        if (node.right) {
            rightResult = recursion(node.right, sum);
        }

        return leftResult || rightResult;
    }

    return recursion(root, 0);
};