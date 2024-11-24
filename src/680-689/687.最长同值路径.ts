import { TreeNode } from "@/utils";

// 1. 深度优先
// 2. 后续遍历
// 3. 统计的是路径的长度，不是节点的长度

function longestUnivaluePath(root: TreeNode | null): number {
  let ans = 0;
  dfs(root);
  return ans;

  function dfs(node: TreeNode | null): number {
    if (node === null) return 0;

    let l = 0;
    if (node.left) {
      const value = dfs(node.left);
      if (node.left.val === node.val) {
        l = value + 1;
      }
    }

    let r = 0;
    if (node.right) {
      const value = dfs(node.right);
      if (node.right.val === node.val) {
        r = value + 1;
      }
    }

    ans = Math.max(ans, l + r);

    return Math.max(l, r);
  }
}

export { longestUnivaluePath };
