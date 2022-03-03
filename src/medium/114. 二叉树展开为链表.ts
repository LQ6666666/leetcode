import { TreeNode } from "../utils";

function flatten(root: TreeNode | null): void {
    const array: TreeNode[] = [];

    function recursion(node: TreeNode | null) {
        if (node === null) return;
        array.push(node);
        recursion(node.left);
        recursion(node.right);
    }

    recursion(root);

    for (let i = 1; i < array.length; i++) {
        const prev = array[i - 1], cur = array[i];

        prev.left = null;
        prev.right = cur;
    }
};