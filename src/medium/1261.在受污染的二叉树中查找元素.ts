import { TreeNode } from "@/utils";

class FindElements {
  private set: Set<number>;
  constructor(root: TreeNode | null) {
    this.set = new Set();
    this.restore(root);
  }

  find(target: number): boolean {
    return this.set.has(target);
  }

  private restore(root: TreeNode | null): TreeNode | null {
    if (root === null) return root;
    root.val = 0;
    const dfs = (node: TreeNode | null): void => {
      if (node === null) return;
      this.set.add(node.val);

      if (node.left) {
        node.left.val = 2 * node.val + 1;
        dfs(node.left);
      }

      if (node.right) {
        node.right.val = 2 * node.val + 2;
        dfs(node.right);
      }
    };

    dfs(root);
    return root;
  }
}

export { FindElements };
