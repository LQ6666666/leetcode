import { ListNode } from "../utils";

function oddEvenList(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    const evenHead = head.next;
    let odd = head, even = evenHead;

    while (even?.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;
    return head;
};

export { };