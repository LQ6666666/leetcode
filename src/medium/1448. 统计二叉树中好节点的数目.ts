import { TreeNode } from "../utils";

function goodNodes(root: TreeNode | null): number {
    if (root === null) return 0;

    let ans = 0;
    function recursion(node: TreeNode, maxVal: number) {
        const value = node.val;
        if (value >= maxVal) {
            ans++;
        } else {
            maxVal = value;
        }

        if (node.left) {
            recursion(node.left, maxVal);
        }

        if (node.right) {
            recursion(node.right, maxVal);
        }
    }

    recursion(root, root.val);
    return ans;
};