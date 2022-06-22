import { TreeNode } from "../utils";

function findFrequentTreeSum(root: TreeNode | null): number[] {
    if (root === null) return [];

    const map = new Map<number, number>();
    let maxValue = Number.MIN_SAFE_INTEGER;
    mapAdd(dfs(root));

    const ans: number[] = [];
    map.forEach((value, key) => {
        if (maxValue === value) {
            ans.push(key)
        }
    });

    return ans;

    function dfs(node: TreeNode): number {
        let ans = node.val;

        if (node.left) {
            const leftValue = dfs(node.left);
            mapAdd(leftValue);
            ans += leftValue;
        }

        if (node.right) {
            const rightValue = dfs(node.right);
            mapAdd(rightValue);
            ans += rightValue;
        }

        return ans;
    }

    function mapAdd(key: number) {
        const value = (map.get(key) ?? 0) + 1;
        maxValue = Math.max(value, maxValue);
        map.set(key, value);
    }
};

export { };