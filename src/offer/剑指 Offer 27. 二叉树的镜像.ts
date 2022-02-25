import { TreeNode } from '../utils';

function mirrorTree(root: TreeNode | null): TreeNode | null {
    if (root === null) return root;

    const node = new TreeNode(root.val);
    node.left = mirrorTree(root.right);
    node.right = mirrorTree(root.left);

    return node;
};