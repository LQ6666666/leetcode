import { TreeNode } from "@/utils";

function constructFromPrePost(preorder: number[], postorder: number[]): TreeNode | null {
  const n = preorder.length;
  if (n === 0) return null;
  const nodeVal = preorder[0];
  const node = new TreeNode(nodeVal);
  if (n === 1) return node;

  // 前序遍历的根节点后一个就是左子树的根节点
  const leftVal = preorder[1];
  const leftSize = postorder.indexOf(leftVal) + 1;
  const rightSize = n - leftSize - 1;

  if (leftSize) {
    const leftPreorder = preorder.slice(1, 1 + leftSize);
    const leftPostorder = postorder.slice(0, leftSize);
    node.left = constructFromPrePost(leftPreorder, leftPostorder);
  }

  if (rightSize) {
    const rightPreorder = preorder.slice(-rightSize);
    const rightPostorder = postorder.slice(leftSize, leftSize + rightSize);
    node.right = constructFromPrePost(rightPreorder, rightPostorder);
  }

  return node;
}

export { constructFromPrePost };
