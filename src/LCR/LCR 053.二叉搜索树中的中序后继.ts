import { TreeNode } from "@/utils";

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
  let flag = false;
  let ans: TreeNode | null = null;
  inorder(root);
  return ans;

  function inorder(node: TreeNode | null) {
    if (node === null) return;

    inorder(node.left);
    if (flag && ans === null) {
      ans = node;
      return;
    } else if (node === p) {
      flag = true;
    }
    inorder(node.right);
  }
}

export {};
