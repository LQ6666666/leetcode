import { TreeNode } from "../utils";

function levelOrder(root: TreeNode | null): number[][] {
    const stack: TreeNode[] = [];
    const ret: number[][] = [];

    if (root !== null) {
        stack.push(root);
    }

    while (stack.length > 0) {
        const temp: number[] = [];
        let i = stack.length;
        while (i > 0) {
            const node = stack.shift()!;
            temp.push(node.val);

            if (node.left) {
                stack.push(node.left);
            }

            if (node.right) {
                stack.push(node.right);
            }

            i--;
        }
        ret.push(temp);;
    }

    return ret;
};