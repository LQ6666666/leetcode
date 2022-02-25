import { TreeNode } from "../utils";

function levelOrder(root: TreeNode | null): number[] {
    if (root === null) return [];

    const queue: TreeNode[] = [root];
    const ret: number[] = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node === undefined) {
            continue;
        }

        ret.push(node.val);

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }

    return ret;
};