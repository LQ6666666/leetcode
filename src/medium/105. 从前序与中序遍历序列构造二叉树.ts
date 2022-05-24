import { TreeNode } from "../utils"
// 递归
// 第一个数字是根节点
// 然后在中序遍历中找到根节点，前一个为数字为 前一个节点，后一个为后一个节点
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0) return null;

    const nodeValue = preorder[0];
    const index = inorder.indexOf(nodeValue)

    if (index === -1) return null;

    const node = new TreeNode(nodeValue);

    // 有左节点
    if (index !== 0) {
        node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    }

    // 有右节点
    if (index !== inorder.length - 1) {
        node.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1));
    }

    return node;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
console.log(buildTree([-1], [-1]));
console.log(buildTree([1, 2, 3], [3, 2, 1]));

export { };