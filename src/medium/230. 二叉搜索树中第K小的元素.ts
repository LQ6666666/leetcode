import { TreeNode } from "../utils";

function kthSmallest(root: TreeNode | null, k: number): number {
    if (root === null) {
        return 0;
    }

    const arr: number[] = []

    const recursion = (node: TreeNode) => {
        arr.push(node.val);

        if (node.left !== null) {
            recursion(node.left)
        }

        if (node.right !== null) {
            recursion(node.right)
        }
    }

    recursion(root);

    arr.sort((a, b) => a - b);

    return arr[k];
};


const root = new TreeNode(3);
root.left = new TreeNode(1);
root.left.left = new TreeNode(2)
root.right = new TreeNode(4);

console.clear()
console.log(kthSmallest(root, 5));
