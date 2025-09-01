import { TreeNode } from "@/utils";

function kthLargestPerfectSubtree(root: TreeNode | null, k: number): number {
  const counts = new Array<number>();
  dfs(root, 0);
  counts.sort((a, b) => b - a);
  k--;
  return k < counts.length ? counts[k] : -1;

  function dfs(node: TreeNode | null, count: number): number {
    if (node === null) return 0;

    const leftHeight = dfs(node.left, count);
    const rightHeight = dfs(node.right, count);

    // 左右子树高度是否一致
    if (leftHeight === rightHeight && leftHeight !== -1) {
      count = leftHeight + rightHeight + 1;
      counts.push(count);
      return count;
    }

    return -1;
  }
}

export { kthLargestPerfectSubtree };
