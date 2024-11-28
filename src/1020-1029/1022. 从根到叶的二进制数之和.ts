import { TreeNode } from '../utils';

function sumRootToLeaf(root: TreeNode | null): number {
    let ans = 0;
    return preOrder(root, ""), ans;

    function preOrder(node: TreeNode | null, s: string) {
        if (node === null) return s;
        s += node.val;
        if (node.left === null && node.right === null) {
            ans += globalThis.parseInt(s, 2);
            return
        }

        if (node.left) preOrder(node.left, s);
        if (node.right) preOrder(node.right, s);
    }
};

export { };