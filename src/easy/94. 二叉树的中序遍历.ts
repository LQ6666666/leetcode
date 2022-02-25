import { TreeNode } from "../utils";

function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];

    function inorder(node: TreeNode | null): void {
        if (node === null) return;

        if (node.left) {
            inorder(node.left);
        }

        ans.push(node.val);

        if (node.right) {
            inorder(node.right);
        }
    }

    inorder(root);

    return ans;
};