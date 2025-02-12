import { TreeNode } from "@/utils";

function balanceBST(root: TreeNode | null): TreeNode | null {
  const list: number[] = [];
  inorder(root);
  return createAVL(0, list.length - 1);

  function inorder(node: TreeNode | null): void {
    if (node === null) return;
    inorder(node.left);
    list.push(node.val);
    inorder(node.right);
  }

  function createAVL(l: number, r: number): TreeNode | null {
    if (l > r) return null;
    const m = l + Math.floor((r - l) / 2);

    const node = new TreeNode(list[m]);
    node.left = createAVL(l, m - 1);
    node.right = createAVL(m + 1, r);

    return node;
  }
}

export { balanceBST };
