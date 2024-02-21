import { TreeNode } from "../utils";

function buildTree$(inorder: number[], postorder: number[]): TreeNode | null {
  const n = inorder.length;
  if (n === 0) return null;

  const helper = (leftIndex: number, rightIndex: number): TreeNode | null => {
    if (leftIndex > rightIndex) return null;

    const rootValue = postorder[postIndex];
    const root = new TreeNode(rootValue);

    postIndex--;

    // 前序遍历的数组 index 左边是左子树，右边是右子树
    const index = indexMap.get(rootValue)!;
    // 这里要先走 右子树
    root.right = helper(index + 1, rightIndex);
    root.left = helper(leftIndex, index - 1);

    return root;
  };

  const indexMap = new Map<number, number>();
  for (let i = 0; i < n; i++) {
    indexMap.set(inorder[i], i);
  }

  let postIndex = n - 1;

  return helper(0, postIndex);
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const n = postorder.length;
  if (n === 0) return null;

  const nodeValue = postorder[n - 1];
  const index = inorder.indexOf(nodeValue);
  if (index === -1) return null;

  const node = new TreeNode(nodeValue);

  const leftInorder = inorder.slice(0, index);
  if (leftInorder.length) {
    node.left = buildTree(leftInorder, postorder.slice(0, leftInorder.length));
  }

  const rightInorder = inorder.slice(index + 1);
  if (rightInorder.length) {
    node.right = buildTree(rightInorder, postorder.slice(leftInorder.length, -1));
  }

  return node;
}

export { buildTree };
