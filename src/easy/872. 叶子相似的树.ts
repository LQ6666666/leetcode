import { TreeNode } from "../utils";

export { };

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let activeLeafsStr: number[] = [];
    dfs(root1);
    const a = activeLeafsStr.toString();
    activeLeafsStr = [];
    dfs(root2);
    const b = activeLeafsStr.toString();

    return a === b;

    function dfs(node: TreeNode | null) {
        if (node === null) return;

        if (node.left === null && node.right === null) {
            // push
            console.log(node.val);
            activeLeafsStr.push(node.val);
        } else {
            dfs(node.left);
            dfs(node.right);
        }
    }
};