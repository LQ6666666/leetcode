import { TreeNode } from "src/utils";

// 扁平化
class BSTIterator1 {
  private arr: number[];
  private index: number;

  constructor(root: TreeNode | null) {
    // 变成数组
    this.arr = this.traverse(root);
    this.index = 0;
  }

  next(): number {
    return this.arr[this.index++];
  }

  hasNext(): boolean {
    return this.arr.length > this.index;
  }

  private traverse(root: TreeNode | null) {
    const result: number[] = [];
    function dfs(node: TreeNode) {
      if (node.left) {
        dfs(node.left);
      }

      result.push(node.val);

      if (node.right) {
        dfs(node.right);
      }
    }

    root && dfs(root);
    return result;
  }
}

// 栈
class BSTIterator {
  private stack: TreeNode[];
  private cur: TreeNode | null;

  constructor(root: TreeNode | null) {
    this.stack = [];
    this.cur = root;
  }

  next(): number {
    while (this.cur) {
      this.stack.push(this.cur);
      this.cur = this.cur.left;
    }
    this.cur = this.stack.pop() ?? null;
    const ans = this.cur?.val ?? -1;
    this.cur = this.cur?.right ?? null;
    return ans;
  }

  hasNext(): boolean {
    return this.cur !== null || this.stack.length !== 0;
  }
}

export { BSTIterator };
