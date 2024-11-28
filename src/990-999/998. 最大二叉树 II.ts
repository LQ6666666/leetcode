import { TreeNode } from "../utils";

export { };

function insertIntoMaxTree(root: TreeNode | null, val: number): TreeNode | null {
    const node = new TreeNode(val);

    if (root === null) return node;

    if (root.val > val) {
        root.right = insertIntoMaxTree(root.right, val);

        return root;
    } else {
        node.left = root;
        return node;
    }
};
