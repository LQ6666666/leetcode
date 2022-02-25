import { TreeNode } from '../utils';

function minDepth(root: TreeNode | null): number {
    function recursion(node: TreeNode, count: number): number {
        if (node.left === null && node.right === null) {
            return count;
        }

        let left = Number.MAX_SAFE_INTEGER;
        let right = Number.MAX_SAFE_INTEGER;

        if (node.left) {
            left = recursion(node.left, count + 1)
        }

        if (node.right) {
            right = recursion(node.right, count + 1)
        }


        return Math.min(left, right);
    }

    if (root === null) return 0;

    return recursion(root, 1);
};