import { TreeNode } from "../utils";

function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
    const ans: number[] = [];

    inOrder(root1);
    inOrder(root2);

    ans.sort((a, b) => a - b);

    return ans;

    function inOrder(root: TreeNode | null) {
        if (root == null) return;

        if (root.left) {
            inOrder(root.left);
        }

        ans.push(root.val);

        if (root.right) {
            inOrder(root.right);
        }
    }
};


export { };