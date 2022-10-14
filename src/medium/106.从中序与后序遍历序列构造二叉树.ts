import { TreeNode } from "../utils";

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
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

export { buildTree };
