import { ListNode } from "../utils";

function kthToLast(head: ListNode | null, k: number): number {
  let i = 0;
  let cur = head;
  while (cur) {
    i++;
    cur = cur.next;
  }

  const target = i - k;
  cur = head;

  i = 0;
  while (cur) {
    if (i === target) {
      return cur.val;
    }

    cur = cur.next;
  }

  return -1;
}

export { kthToLast };
