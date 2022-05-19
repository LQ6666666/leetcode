import { TreeNode } from "../utils";

function isValidBST(root: TreeNode | null): boolean {
    function recurse(node: TreeNode | null, min: number, max: number): boolean {
        if (node === null) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return recurse(node.left, min, node.val) && recurse(node.right, node.val, max);
    }

    return recurse(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

export { };