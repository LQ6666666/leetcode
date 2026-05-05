import { ListNode } from "../utils";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let cur = head;
  let size = 0;
  while (cur) {
    size++;
    cur = cur.next;
  }

  k %= size;

  let part1: ListNode | null = null;
  let part2: ListNode | null = null;
  let index = 0;
  cur = head;
  while (cur) {
    index++;
    if (index + k === size) {
      part1 = cur;
    }
    part2 = cur;
    cur = cur.next;
  }

  if (part1 && part2) {
    part2.next = head;
    head = part1.next;
    part1.next = null;
  }

  return head;
}

export {};
