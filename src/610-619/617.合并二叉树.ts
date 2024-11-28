import { TreeNode } from "../utils";

function mergeTrees$(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (root1 === null) {
    return root2;
  }

  if (root2 === null) {
    return root1;
  }

  const node = new TreeNode(root1.val + root2.val);
  node.left = mergeTrees$(root1.left, root2.left);
  node.right = mergeTrees$(root1.right, root2.right);

  return node;
}

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  const node = new TreeNode(root1.val + root2.val);
  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);
  return node;
}

export {};
