import { TreeNode } from "@/utils";

function convertBST(root: TreeNode | null): TreeNode | null {
  let temp = 0;
  dfs(root);
  return root;

  function dfs(node: TreeNode | null): void {
    if (node === null) return;

    dfs(node.right);
    temp = node.val = temp + node.val;
    dfs(node.left);
  }
}

export { convertBST };
