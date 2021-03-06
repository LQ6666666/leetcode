import { TreeNode } from "../utils";

// function findTarget(root: TreeNode | null, k: number): boolean {
//     if (root === null) return false;

//     const set = new Set<number>();
//     const queue: TreeNode[] = [root];

//     while (queue.length > 0) {
//         const node = queue.shift()!;

//         if (set.has(k - node.val)) {
//             return true;
//         }

//         set.add(node.val);

//         if (node.left) {
//             queue.push(node.left);
//         }

//         if (node.right) {
//             queue.push(node.right);
//         }
//     }

//     return false;
// };

// function findTarget(root: TreeNode | null, k: number): boolean {
//     if (root === null) return false;

//     const set = new Set<number>();
//     const queue: TreeNode[] = [root];

//     while (queue.length > 0) {
//         let i = queue.length;

//         while (i > 0) {
//             const node = queue.shift()!;

//             if (set.has(k - node.val)) {
//                 return true;
//             }

//             set.add(node.val);
//             i--;

//             if (node.left) {
//                 queue.push(node.left);
//             }

//             if (node.right) {
//                 queue.push(node.right);
//             }
//         }
//     }

//     return false;
// };

function findTarget(root: TreeNode | null, k: number): boolean {
    const set = new Set<number>();

    function order(node: TreeNode | null): boolean {
        if (node === null) return false;

        if (set.has(k - node.val)) {
            return true;
        } else {
            set.add(node.val);
            return order(node.left) || order(node.right);
        }
    }

    return order(root);
};