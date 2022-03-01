import { ListNode } from "../utils";

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    if (head === null) return null;
    // 快慢指针
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    // 让 fast 先走 k 步
    while (fast !== null && k > 0) {
        fast = fast.next
        k--;
    }

    while (fast !== null) {
        slow = slow!.next;
        fast = fast.next;
    }

    return slow;
};