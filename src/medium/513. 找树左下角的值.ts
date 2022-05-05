import { TreeNode } from "../utils";

// 层序遍历
function findBottomLeftValue(root: TreeNode | null): number {
    const queue: TreeNode[] = [];

    if (root) {
        queue.push(root);
    } else {
        return -1;
    }

    let ans = root.val;
    while (queue.length > 0) {
        let n = queue.length;
        while (n > 0) {
            const node = queue.shift()!;
            ans = node.val;

            if (node.right) queue.push(node.right);

            if (node.left) queue.push(node.left);

            n--;
        }
    }

    return ans;
};

export { };