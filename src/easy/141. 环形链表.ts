import { ListNode } from "../utils";

function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;

    // 慢的走一步，快的走两步
    let slow: ListNode | null = head;
    let fast: ListNode | null = head.next;

    while (slow !== null && fast !== null) {
        if (slow === fast) return true;

        slow = slow.next;
        fast = fast.next?.next ?? null;
    }

    return false;
};