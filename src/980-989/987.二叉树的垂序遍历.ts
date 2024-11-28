import { TreeNode } from "@/utils";

function verticalTraversal(root: TreeNode | null): number[][] {
  const nodes: [col: number, row: number, value: number][] = [];
  dfs(root, 0, 0);

  nodes.sort(([col1, row1, value1], [col2, row2, value2]) => {
    if (col1 === col2) {
      if (row1 === row2) {
        return value1 - value2;
      } else {
        return row1 - row2;
      }
    } else {
      return col1 - col2;
    }
  });

  const ans: number[][] = [];
  let lastCol = Number.MIN_SAFE_INTEGER;
  for (const [col, row, value] of nodes) {
    if (col !== lastCol) {
      lastCol = col;
      ans.push([]);
    }
    ans[ans.length - 1].push(value);
  }
  return ans;

  function dfs(node: TreeNode | null, col: number, row: number) {
    if (node === null) return null;
    nodes.push([col, row, node.val]);
    dfs(node.left, col - 1, row + 1);
    dfs(node.right, col + 1, row + 1);
  }
}

export { verticalTraversal };
