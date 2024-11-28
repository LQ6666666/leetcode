import { ListNode } from "src/utils";

/** 栈 */
function removeNodes$(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head;
  let stack: ListNode[] = [];

  while (cur) {
    while (stack.length && stack.at(-1)!.val < cur.val) {
      stack.pop();
    }

    stack.push(cur);
    cur = cur.next;
  }

  let prev = stack.pop() ?? null;
  while (stack.length) {
    const node = stack.pop() ?? null;

    if (node) {
      node.next = prev;
      prev = node;
    }
  }

  return prev;
}

/** 递归 */
function removeNodes$$(head: ListNode | null): ListNode | null {
  function dfs(node: ListNode): ListNode {
    if (node.next === null) return node;

    const temp = dfs(node.next);

    if (temp.val > node.val) {
      return temp;
    }

    node.next = temp;
    return node;
  }

  if (head === null) return head;

  return dfs(head);
}

/** 反转链表 */
function removeNodes(head: ListNode | null): ListNode | null {
  head = reserve(head);

  let cur = head;
  while (cur && cur.next) {
    if (cur.val > cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  } 

  return reserve(head);
}

function reserve(head: ListNode | null): ListNode | null {
  if (head === null) return null;
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
