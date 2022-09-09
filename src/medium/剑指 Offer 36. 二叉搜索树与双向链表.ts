import { TreeNode } from "../utils";

function treeToDoublyList(root: TreeNode | null) {
  if (root === null) return root;

  let pre: TreeNode | null = null, head: TreeNode | null = null;

  dfs(root);

  head!.left = pre;
  pre!.right = head;

  return head;

  function dfs(node: TreeNode | null): void {
    if (node === null) return;

    dfs(node.left);
    // do some thing
    if (pre === null) {
      head = node;
    } else {
      pre.right = node;
    }

    node.left = pre;
    pre = node;

    dfs(node.right);
  }
};
