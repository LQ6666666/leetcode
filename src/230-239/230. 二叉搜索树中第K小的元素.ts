import { TreeNode } from "../utils";

// function kthSmallest(root: TreeNode | null, k: number): number {
//     if (root === null) {
//         return 0;
//     }

//     const arr: number[] = []

//     const recursion = (node: TreeNode) => {
//         arr.push(node.val);

//         if (node.left !== null) {
//             recursion(node.left)
//         }

//         if (node.right !== null) {
//             recursion(node.right)
//         }
//     }

//     recursion(root);

//     arr.sort((a, b) => a - b);

//     return arr[k];
// };

// 中序遍历
function kthSmallest(root: TreeNode | null, k: number): number {
    let ans = -1, count = 0;

    const recursion = (node: TreeNode): void => {
        if (node.left) {
            recursion(node.left);
        }

        count++;
        if (count === k) {
            ans = node.val;
            return;
        }

        if (node.right) {
            recursion(node.right);
        }
    }

    return (root && recursion(root), ans);
};

export { };
