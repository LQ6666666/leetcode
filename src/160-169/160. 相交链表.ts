import { ListNode } from "../utils";

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;

    const set = new Set<ListNode>();
    let current: ListNode | null = headA

    while (current !== null) {
        set.add(current);
        current = current.next;
    }

    current = headB

    while (current !== null) {
        if (set.has(current)) {
            return current;
        }
        current = current.next;
    }
    return null;
};