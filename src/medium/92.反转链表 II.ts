import { ListNode } from "src/utils";

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let cur: ListNode | null = head;
  let leftNodePrev: ListNode | null = null;
  let endNext: ListNode | null = null;

  let index = 1;
  while (cur) {
    if (index === left) {
      break;
    }

    leftNodePrev = cur;
    cur = cur.next;
    index++;
  }

  const leftNode: ListNode | null = cur;

  let prev: ListNode | null = null;
  while (cur) {
    const next = cur.next;
    cur.next = prev;

    if (index === right) {
      endNext = next;
      break;
    }

    prev = cur;
    cur = next;
    index++;
  }

  if (leftNodePrev) {
    leftNodePrev.next = cur;
  }

  if (leftNode) {
    leftNode.next = endNext;
  }

  if (left === 1) return cur;

  return head;
};

export { reverseBetween };
