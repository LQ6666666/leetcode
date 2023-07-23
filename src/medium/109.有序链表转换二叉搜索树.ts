import { ListNode, TreeNode } from "@/utils";

function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (head === null) return null;

  // 找到中间的节点和中间节点的前一个节点
  // 快慢指针
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }

  const middle = slow!;
  const node = new TreeNode(middle.val);
  if (head === middle) return node;

  // 节点数量大于一个, 分开左侧
  prev!.next = null;

  node.left = sortedListToBST(head);
  node.right = sortedListToBST(middle.next);

  return node;
}

export {};
