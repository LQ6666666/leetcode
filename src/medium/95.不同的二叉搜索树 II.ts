import { TreeNode } from "@/utils";

function generateTrees(n: number): (TreeNode | null)[] {
  if (n === 0) return [];
  return helper(1, n);
}

function helper(start: number, end: number): (TreeNode | null)[] {
  const allTrees: (TreeNode | null)[] = [];
  // 此时没有数字，将 null 加入结果中
  if (start > end) {
    allTrees.push(null);
    return allTrees;
  }

  // 尝试每个数字作为根节点
  for (let i = start; i <= end; i++) {
    // 得到所有可能的左子树
    const leftTrees = helper(start, i - 1);
    // 得到所有可能的右子树
    const rightTrees = helper(i + 1, end);

    // 从左子树集合中选出一棵左子树，从右子树集合中选出一棵右子树，拼接到根节点上
    for (const left of leftTrees) {
      for (const right of rightTrees) {
        // 根节点
        const node = new TreeNode(i);
        node.left = left;
        node.right = right;
        // 加入到最终结果中
        allTrees.push(node);
      }
    }
  }

  return allTrees;
}

export { generateTrees };
