import { TreeNode } from "../utils";

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
    let flag = false;
    let next: TreeNode | null = null;

    function recursion(node: TreeNode | null) {
        if (node === null) {
            return;
        }

        recursion(node.left);
        if (next !== null) {
            return;
        }

        if (flag) {
            next = node;
        }

        if (node === p) {
            flag = true;
        }

        recursion(node.right);
    }

    recursion(root);
    return next;
}