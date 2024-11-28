import { TreeNode } from "../utils";

export { };

/*
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return null;

    if (root.val === val) {
        return root;
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};
*/

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let cur: TreeNode | null = root;

    while (cur) {
        if (cur.val === val) {
            return cur;
        } else if (val < cur.val) {
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }

    return cur;
};
