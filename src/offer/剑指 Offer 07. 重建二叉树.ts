import { TreeNode } from "../utils";

export { };
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const n = preorder.length;
    if (n === 0) return null;

    // 找到 根节点
    const rootValue = preorder[0];

    // 找到 根节点 在 中序数组里面的索引
    const leftInorder: number[] = [];
    let i = 0;
    for (; i < n; i++) {
        const item = inorder[i]
        if (rootValue === item) {
            break;
        }
        leftInorder.push(item);
    }

    const leftPreOrder: number[] = preorder.slice(1, leftInorder.length + 1);
    const rightPreOrder: number[] = preorder.slice(leftInorder.length + 1);

    const root = new TreeNode(rootValue);
    root.left = buildTree(leftPreOrder, leftInorder);
    root.right = buildTree(rightPreOrder, inorder.slice(i + 1));

    return root;
};