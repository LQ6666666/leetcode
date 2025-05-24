import { TreeNode } from "@/utils";
class BSTIterator {
  private list: number[];
  private index: number;

  constructor(root: TreeNode | null) {
    this.list = [];
    this.index = 0;
    this.inorder(root);
  }

  next(): number {
    return this.list[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.list.length;
  }

  private inorder(node: TreeNode | null): void {
    if (node === null) return;
    this.inorder(node.left);
    this.list.push(node.val);
    this.inorder(node.right);
  }
}

export { BSTIterator };
