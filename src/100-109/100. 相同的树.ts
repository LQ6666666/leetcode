import { TreeNode } from "../utils";

type NODE_TYPE = TreeNode | null;
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true
    }

    if (p?.val !== q?.val) {
        return false;
    } else {
        return isSameTree(p?.left as NODE_TYPE, q?.left as NODE_TYPE) && isSameTree(p?.right as NODE_TYPE, q?.right as NODE_TYPE)
    }
};

