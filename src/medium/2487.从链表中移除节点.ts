import { ListNode } from "src/utils";

function removeNodes(head: ListNode | null): ListNode | null {
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

function removeNodes1(head: ListNode | null): ListNode | null {
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

export {};
