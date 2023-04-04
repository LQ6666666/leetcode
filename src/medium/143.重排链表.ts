import { ListNode } from "@/utils";

function reorderList(head: ListNode | null): void {
  // 找到中间的节点
  let fast = head;
  let slow = head;
  let prev = null;
  while (fast) {
    fast = fast.next?.next ?? null;
    prev = slow;
    slow = slow!.next;
  }

  if (prev) prev.next = null;

  // 反转 head2
  let cur = slow;
  prev = null;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  // 插入
  let cur1 = head;
  let cur2 = prev;
  while (cur2) {
    const node = cur2;
    cur2 = cur2.next;

    let next = cur1?.next ?? null;
    cur1!.next = node;
    node.next = next;
    cur1 = next;
  }
}

export {};
