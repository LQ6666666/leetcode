import { TreeNode } from "@/utils";

function flipMatchVoyage(root: TreeNode | null, voyage: number[]): number[] {
  let index = 0;
  let arr: number[] = [];
  return dfs(root) ? arr : [-1];

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return true;
    if (node.val !== voyage[index]) return false;
    index++;

    if (node.left !== null && node.left.val !== voyage[index]) {
      arr.push(node.val);
      return dfs(node.right) && dfs(node.left);
    } else {
      return dfs(node.left) && dfs(node.right);
    }
  }
}

export { flipMatchVoyage };
