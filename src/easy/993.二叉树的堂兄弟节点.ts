import { TreeNode } from "@/utils";

interface NodeInfo {
  found: boolean;
  parent: TreeNode | null;
  depth: number | null;
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let xNode: NodeInfo = { found: false, parent: null, depth: null };
  let yNode: NodeInfo = { found: false, parent: null, depth: null };

  dfs(root, 0, null);

  return xNode.depth === yNode.depth && xNode.parent !== yNode.parent;

  function dfs(node: TreeNode | null, depth: number, parent: TreeNode | null): void {
    if (node === null) return;

    if (node.val === x) {
      xNode = { found: true, parent, depth };
    } else if (node.val === y) {
      yNode = { found: true, parent, depth };
    }

    if (xNode.found && yNode.found) return;

    dfs(node.left, depth + 1, node);

    if (xNode.found && yNode.found) return;

    dfs(node.right, depth + 1, node);
  }
}

export { isCousins };
