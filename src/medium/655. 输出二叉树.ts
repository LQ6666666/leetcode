import { TreeNode } from "../utils";
export { };

function printTree(root: TreeNode | null): string[][] {
    const height = getHeight(root) - 1;
    const m = height + 1, n = (1 << (height + 1)) - 1;
    const ans: string[][] = Array.from({ length: m }, () => new Array(n).fill(""));

    dfs(root, 0, (n - 1) >> 1);
    return ans;

    function getHeight(node: TreeNode | null): number {
        if (node === null) return 0;
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    }

    function dfs(node: TreeNode | null, r: number, c: number): void {
        if (node === null) return;

        ans[r][c] = node.val.toString();
        dfs(node.left, r + 1, c - 2 ** (height - r - 1));
        dfs(node.right, r + 1, c + 2 ** (height - r - 1));
    }
};
