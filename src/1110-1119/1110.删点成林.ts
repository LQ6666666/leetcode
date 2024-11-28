import { TreeNode } from "@/utils";

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const toDeleteSet = new Set(to_delete);
  const ans: (TreeNode | null)[] = [];
  return dfs(root, true), ans;

  /** 后续遍历 */
  function dfs(node: TreeNode | null, isRoot = false) {
    if (node === null) return null;

    const deletion = toDeleteSet.has(node.val);

    node.left = dfs(node.left, deletion);
    node.right = dfs(node.right, deletion);

    if (deletion) {
      return null;
    } else {
      if (isRoot) {
        ans.push(node);
      }

      return node;
    }
  }
}

export {};
