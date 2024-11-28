import { TreeNode } from "../utils";

function findSecondMinimumValue(root: TreeNode | null): number {
    let ans = -1;
    if (root === null) return ans;

    const rootVal = root.val;

    const dfs = (node: TreeNode | null): void => {
        if (node === null) return;

        // ans 不等于 1 ，并且要保证大于 ans 的不会在走下面代码了
        if (ans !== -1 && node.val >= ans) return;

        if (node.val > rootVal) {
            ans = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    return dfs(root), ans;
};


export { };