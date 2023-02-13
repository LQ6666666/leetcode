import { ListNode } from "@/utils";

function partition(head: ListNode | null, x: number): ListNode | null {
  let ltHead: ListNode | null = null;
  let currentLt: ListNode | null = null;
  let gtHead: ListNode | null = null;
  let currentGt: ListNode | null = null;

  let current = head;
  while (current) {
    const next = current.next;
    current.next = null;
    if (current.val < x) {
      if (ltHead === null) {
        ltHead = current;
        currentLt = current;
      } else {
        currentLt!.next = current;
        currentLt = current;
      }
    } else {
      if (gtHead === null) {
        gtHead = current;
        currentGt = current;
      } else {
        currentGt!.next = current;
        currentGt = current;
      }
    }
    current = next;
  }

  if (currentLt) {
    currentLt.next = gtHead;
  } else {
    ltHead = gtHead;
  }

  if (currentGt) {
    currentGt.next = null;
  }

  return ltHead;
}

export { partition };
