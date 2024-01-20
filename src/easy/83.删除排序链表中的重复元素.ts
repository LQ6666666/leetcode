import { ListNode } from "@/utils";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;

  while (current?.next) {
    const next = current.next;
    if (current.val === next.val) {
      current.next = next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

export {};
