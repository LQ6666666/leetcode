import { ListNode } from "../utils";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1: number[] = [];
    const stack2: number[] = [];

    let cur = l1;
    while (cur !== null) {
        stack1.push(cur.val);
        cur = cur.next;
    }

    cur = l2;
    while (cur !== null) {
        stack2.push(cur.val);
        cur = cur.next;
    }

    let carry = 0;
    cur = null;
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
        let sum = carry + (stack1.pop() ?? 0) + (stack2.pop() ?? 0);
        carry = Math.floor(sum / 10);
        const node = new ListNode(sum % 10);
        node.next = cur;
        cur = node;
    }

    return cur;
};