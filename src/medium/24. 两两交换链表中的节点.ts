import { ListNode } from '../utils';

function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head
    }

    const next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;

    return next;
};