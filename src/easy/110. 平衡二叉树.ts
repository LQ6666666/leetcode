import { TreeNode } from "../utils";

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;

    function recursion(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        const leftHeight = recursion(node.left);
        const rightHeight = recursion(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    if (Math.abs(recursion(root.left) - recursion(root.right)) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
};