import { TreeNode } from "../utils";

function binaryTreePaths(root: TreeNode | null): string[] {
    const ans: string[] = [];

    if (root === null) return ans;

    const _recursion = (node: TreeNode | null, path: string) => {
        if (node === null) {
            ans.push(path)
            return
        }

        const str = path === "" ? `${node.val}` : `${path}->${node.val}`;

        if (node.left && node.right) {
            _recursion(node.left, str);
            _recursion(node.right, str);
        } else if (node.left === null) {
            _recursion(node.right, str);
        } else if (node.right === null) {
            _recursion(node.left, str);
        }
    }

    _recursion(root, "");

    return ans;
};