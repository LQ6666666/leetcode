import { TreeNode } from "../utils";

function maxLevelSum(root: TreeNode | null): number {
    if (root === null) return 0;

    let ans = Number.MAX_SAFE_INTEGER;
    let sum = Number.MIN_SAFE_INTEGER;

    const queue = [root];
    let level = 0;

    while (queue.length) {
        const n = queue.length;
        let temp = 0;
        let i = 0;
        while (i < n) {
            const node = queue.shift()!;
            temp += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            i++;
        }

        if (temp >= sum) {
            sum = temp;
            ans = level;
        }

        level++;
    }

    return ans;
};

export { };