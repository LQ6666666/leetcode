import { TreeNode } from "../utils";

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;

    if (Math.abs(height(root.left) - height(root.right)) > 1) {
        return false;
    }

    return isBalanced(root.left) && isBalanced(root.right);
};

function height(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    } else {
        return Math.max(height(root.left), height(root.right)) + 1;
    }
}

export { };