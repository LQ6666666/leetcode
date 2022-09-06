import { TreeNode } from "../utils";

export { }


function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const seen = new Map<string, TreeNode>();
    const repeat = new Set<TreeNode>();

    dfs(root);

    return Array.from(repeat.values());

    function dfs(node: TreeNode | null): string {
        if (node === null) return "";

        const s = `${node.val}(${dfs(node.left)})(${dfs(node.right)})`;

        if (seen.has(s)) {
            repeat.add(seen.get(s)!);
        } else {
            seen.set(s, node);
        }

        return s;
    }
};