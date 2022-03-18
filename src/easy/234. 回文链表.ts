import { ListNode } from "../utils";

function isPalindrome(head: ListNode | null): boolean {
    if (head === null) return false;
    if (head.next === null) return true;

    const stack: number[] = [];
    let slow: ListNode | null = head, fast: ListNode | null = head;

    while (fast !== null && fast.next !== null) {
        stack.push(slow!.val);

        slow = slow!.next;
        fast = fast.next.next;
    }

    if (fast !== null) {
        stack.push(slow!.val);
    }

    while (slow !== null) {
        if (stack.pop() !== slow.val) {
            return false;
        }

        slow = slow.next;
    }

    return true;
};  