import { ListNode } from '../utils';

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let prev = null;
    let current: ListNode | null = head;

    while (current) {
        const temp = new ListNode(current.val);
        temp.next = prev;
        prev = temp;
        current = current.next;
    }

    return prev;
};