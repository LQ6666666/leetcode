import { TreeNode } from "src/utils";

function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  dfs(root);

  return root;

  function dfs(node: TreeNode | null) {
    if (node === null) return;

    dfs(node.right);

    sum = (node.val += sum);

    dfs(node.left);
  }
};

export { convertBST };
