import { ListNode } from "../utils";

// function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//     if (l1 === null || l2 === null) return l1 || l2;

//     if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null || l2 === null) return l1 || l2;

    const head = new ListNode();
    let prev = head;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            prev = prev.next;
            l1 = l1.next;
        } else {
            prev.next = l2;
            prev = prev.next;
            l2 = l2.next;
        }
    }

    if (l1 !== null) {
        prev.next = l1;
    }


    if (l2 !== null) {
        prev.next = l2;
    }

    return head.next;
};