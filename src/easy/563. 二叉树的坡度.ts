import { TreeNode } from "../utils";

function findTilt(root: TreeNode | null): number {
  let result: number = 0;
  if (root === null) return result;

  // 先遍历一遍（递归）
  const recursion = (node: TreeNode): number => {
    let leftValue = 0;
    let rightValue = 0;

    if (node?.left) {
      leftValue = recursion(node.left);
    }

    if (node?.right) {
      rightValue = recursion(node.right);
    }

    result += Math.abs(leftValue - rightValue);

    return leftValue + rightValue + node.val;
  }

  recursion(root);

  // 计算每个节点的值
  return result;
}

// [21, 7, 14, 1, 1, 2, 2, 3, 3]
const tree = new TreeNode();
tree.val = 21;
tree.left = new TreeNode();
tree.left.val = 7;
tree.left.left = new TreeNode();
tree.left.left.val = 1;
tree.left.right = new TreeNode();
tree.left.right.val = 1;
tree.left.left.left = new TreeNode();
tree.left.left.left.val = 3
tree.left.left.right = new TreeNode();
tree.left.left.right.val = 3
tree.right = new TreeNode();
tree.right.val = 14;
tree.right.left = new TreeNode();
tree.right.left.val = 2;
tree.right.right = new TreeNode();
tree.right.right.val = 2;

console.log(findTilt(tree));
