import { ListNode } from "@/utils";

function nextLargerNodes(head: ListNode | null): number[] {
  // 反转链表
  head = reverseList(head);
  // 单调栈
  const stack: number[] = [];
  const ans: number[] = [];
  let cur: ListNode | null = head;

  while (cur) {
    while (stack.length && stack.at(-1)! <= cur.val) {
      stack.pop();
    }
    ans.unshift(stack.at(-1) ?? 0);
    stack.push(cur.val);
    cur = cur.next;
  }

  return ans;
}

function reverseList(head: ListNode | null) {
  let prev: ListNode | null = null;
  let cur: ListNode | null = head;
  while (cur) {
    const next: ListNode | null = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}

export {};
