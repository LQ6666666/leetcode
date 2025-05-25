import { TreeNode } from "@/utils";

function sumEvenGrandparent(root: TreeNode | null): number {
  let ans = 0;
  return dfs(root, null, null), ans;

  function dfs(node: TreeNode | null, parent: TreeNode | null, grandParent: TreeNode | null): void {
    if (node === null) return;

    if (grandParent !== null && grandParent.val % 2 === 0) {
      ans += node.val;
    }

    dfs(node.left, node, parent);
    dfs(node.right, node, parent);
  }
}

export { sumEvenGrandparent };
