import { ListNode } from "../utils";

function reversePrint(head: ListNode | null): number[] {
    const ans: number[] = [];
    if (head === null) return ans;

    let current: ListNode | null = head;

    while (current !== null) {
        ans.unshift(current.val);
        current = current.next;
    }

    return ans;
};