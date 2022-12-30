import { ListNode } from "../utils";

function partition(head: ListNode | null, x: number): ListNode | null {
  // 1.遍历链表
  let current = head;
  let lt: ListNode | null = null;
  let ge: ListNode | null = null;

  let ltHead: ListNode | null = null;
  let geHead: ListNode | null = null;

  while (current) {
    // 2.维护两个链表: 大于和小于 x
    if (current.val < x) {
      if (lt === null) {
        lt = current;
        ltHead = current;
      } else {
        lt.next = current;
        lt = lt.next;
      }
    } else {
      if (ge === null) {
        ge = current;
        geHead = current;
      } else {
        ge.next = current;
        ge = ge.next;
      }
    }

    current = current.next;
  }

  if (ltHead === null) {
    ltHead = geHead;
  } else {
    lt!.next = geHead;
    if (ge) {
      ge.next = null;
    }
  }

  return ltHead;
}

export { partition };
