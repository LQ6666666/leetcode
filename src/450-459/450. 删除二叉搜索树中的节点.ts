import { TreeNode } from "../utils";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key)
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key)
    } else if (root.val === key) {
        if (root.left === null && root.right === null) return null;

        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        // 左右子树都存在，返回后继节点（右子树最左叶子）作为新的根
        let t = root.right;
        while (t.left !== null) {
            t = t.left;
        }
        root.right = deleteNode(root.right, t.val);
        t.right = root.right;
        t.left = root.left
        return t;
    }

    return root;
};

export { };