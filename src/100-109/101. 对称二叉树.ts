import { TreeNode } from "../utils";

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }

    return compare(root.left, root.right);
};

const compare = (n1: TreeNode | null, n2: TreeNode | null): boolean => {
    if (n1 === null && n2 === null) {
        return true;
    }

    if (n1 === null || n2 === null) {
        return false;
    }

    if (n1.val === n2.val) {
        return compare(n1.left, n2.right) && compare(n1.right, n2.left);
    } else {
        return false;
    }
}