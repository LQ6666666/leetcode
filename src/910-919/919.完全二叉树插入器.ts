import { TreeNode } from "@/utils";

class CBTInserter {
  private candidate: TreeNode[] = [];

  constructor(private root: TreeNode | null) {
    const queue: TreeNode[] = root ? [root] : [];
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const node = queue.shift()!;

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }

        if (node.left === null || node.right === null) {
          this.candidate.push(node);
        }
      }
    }
  }

  insert(val: number): number {
    const node = new TreeNode(val);
    const target = this.candidate[0];

    if (target.left === null) {
      target.left = node;
    } else {
      target.right = node;
      this.candidate.shift();
    }

    this.candidate.push(node);
    return target.val;
  }

  get_root(): TreeNode | null {
    return this.root;
  }
}

export { CBTInserter };
