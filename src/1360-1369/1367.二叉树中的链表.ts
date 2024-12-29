import { ListNode, TreeNode } from "@/utils";

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  return dfs(root);

  function dfs(node: TreeNode | null): boolean {
    if (node === null) return false;
    return helper(head, node) || dfs(node.left) || dfs(node.right);
  }
}

function helper(listNode: ListNode | null, treeNode: TreeNode | null): boolean {
  if (listNode === null) return true;
  if (treeNode === null) return false;
  if (listNode.val !== treeNode.val) return false;
  return helper(listNode.next, treeNode.left) || helper(listNode.next, treeNode.right);
}

export { isSubPath };
