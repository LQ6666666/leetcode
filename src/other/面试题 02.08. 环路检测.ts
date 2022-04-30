import { ListNode } from "../utils";

function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null) {
        slow = slow!.next;

        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }

        if (fast === slow) {
            let ptr: ListNode | null = head;

            while (ptr !== slow) {
                ptr = ptr!.next;
                slow = slow!.next;
            }
            return ptr;
        }
    }

    return null;
};


export { };