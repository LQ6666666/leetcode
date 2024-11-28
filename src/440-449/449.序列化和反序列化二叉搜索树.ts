import { TreeNode } from "@/utils";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  // 前序遍历  => 转成字符串
  const ans: number[] = [];
  return dfs(root), ans.join(",");

  function dfs(node: TreeNode | null) {
    if (node === null) return null;

    ans.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  // 前序遍历得到的数组的第一个值就是 `BST` 的根节点
  // 递归就可以反序列化出原本的 `BST`
  // 数组后面的这些数中比根节点的值小的是根节点的左子树，比根节点值大的是根节点的右子树
  if (data === "") return null;
  const values = data.split(",").map(Number);
  return dfs(0, values.length);

  function dfs(start: number, end: number): TreeNode | null {
    if (start >= end) return null;
    const node = new TreeNode(values[start]);
    // 找到分割点
    let leftStart = start + 1;
    let leftEnd = leftStart;
    // 不大于了, 就是右边的树了
    while (leftEnd < end && node.val > values[leftEnd]) leftEnd++;

    node.left = dfs(leftStart, leftEnd);
    node.right = dfs(leftEnd, end);

    return node;
  }
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
