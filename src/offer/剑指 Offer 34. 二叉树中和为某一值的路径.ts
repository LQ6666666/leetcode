import { TreeNode } from "../utils";

function pathSum(root: TreeNode | null, target: number): number[][] {
    if (root === null) return [];
    const ret: number[][] = [];

    function recursion(node: TreeNode, sum: number, sumArr: number[]) {
        sum = sum + node.val;
        sumArr = [...sumArr, node.val];
        if (node.left === null && node.right === null) {
            if (sum === target) {
                ret.push(sumArr);
            }
        }

        if (node.left) {
            recursion(node.left, sum, sumArr);
        }

        if (node.right) {
            recursion(node.right, sum, sumArr);
        }
    }

    recursion(root, 0, []);
    return ret;
};