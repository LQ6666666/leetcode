import { TreeNode } from "../utils";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (subRoot === null || root === null) return false;

    if (compare(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function compare(n1: TreeNode | null, n2: TreeNode | null): boolean {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;

    if (n1.val === n2.val) {
        return false;
    }

    return compare(n1.left, n2.left) && compare(n2.right, n2.right)
}

export { };