import { TreeNode } from "../utils";

// 前序遍历
function isUnivalTree1(root: TreeNode | null): boolean {
    if (root === null) return true;

    const value = root.val;
    return recursion(root);

    function recursion(node: TreeNode | null): boolean {
        if (node === null) return true;
        if (node.val !== value) return false;

        return recursion(node.left) && recursion(node.right);
    }
};

// 层序遍历
function isUnivalTree(root: TreeNode | null): boolean {
    if (root === null) return true;
    const queue: TreeNode[] = [root];
    const value = root.val;
    let ans = true;

    while (queue.length) {
        let n = queue.length;

        while (n > 0) {
            const node = queue.pop()!;

            if (node.val !== value) break;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }

            n--;
        }

        if (n !== 0) {
            ans = false
            break;
        }
    }

    return ans;
};

export { };