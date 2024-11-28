import { TreeNode } from "../utils";

function tree2str(root: TreeNode | null): string {
    let str = "";
    if (root === null) return str;

    function order(node: TreeNode) {
        str += node.val;

        if (node.left) {
            str += "(";
            order(node.left);
            str += ")";
        } else if (node.right !== null) {
            // left 没有子 right 有值的情况
            str += "()";
        }

        if (node.right) {
            str += "(";
            order(node.right);
            str += ")";
        }
    }

    order(root);
    return str;
};