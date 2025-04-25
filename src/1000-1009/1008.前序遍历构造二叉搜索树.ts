import { TreeNode } from "@/utils";

function bstFromPreorder(preorder: number[]): TreeNode | null {
  const n = preorder.length;
  if (n === 0) return null;

  const root = new TreeNode(preorder[0]);

  for (let i = 1; i < n; i++) {
    const val = preorder[i];
    dfs(root, val);
  }

  return root;

  function dfs(node: TreeNode, val: number) {
    if (node.val > val) {
      if (node.left) {
        dfs(node.left, val);
      } else {
        node.left = new TreeNode(val);
      }
    } else {
      if (node.right) {
        dfs(node.right, val);
      } else {
        node.right = new TreeNode(val);
      }
    }
  }
}

export { bstFromPreorder };
