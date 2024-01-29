import { ListNode } from "@/utils";

// 1.找到链表的中点，以中点为分界，将链表拆分成两个子链表(快慢指针)
// 2.对两个子链表分别排序
// 3.将两个排序后的子链表合并，得到完整的排序后的链表。可以使用「21. 合并两个有序链表」的做法，将两个有序的子链表进行合并

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let fast = head;
  let slow = head;
  while (fast.next?.next) {
    fast = fast.next!.next!;
    slow = slow.next!;
  }

  const next = slow.next;
  slow.next = null;
  return merge(sortList(head), sortList(next));
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  const dummy = new ListNode(-1);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}

export {};
