import { ListNode } from "@/utils";

function reorderList$(head: ListNode | null): void {
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

function reorderList(head: ListNode | null): void {
  let slow = head;
  let fast = head;

  // 1. 获取中间的节点
  let prev: ListNode | null = null;
  while (fast) {
    prev = slow;
    slow = slow!.next;
    fast = fast.next?.next ?? null;
  }

  // 2. 断开中间和后续节点连接
  if (prev) {
    prev.next = null;
    prev = null;
  }

  // 3. 反转后续的节点
  let current = slow;
  while (current) {
    const { next } = current;
    current.next = prev;
    prev = current;
    current = next;
  }

  // 插入节点
  let l1 = head;
  let l2 = prev;
  while (l2) {
    const l1Next = l1?.next ?? null;
    const l2Next = l2?.next ?? null;

    l1!.next = l2;
    l2.next = l1Next;

    l1 = l1Next;
    l2 = l2Next;
  }
}

export {};
