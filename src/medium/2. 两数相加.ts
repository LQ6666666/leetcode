import { ListNode } from "../utils";

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const root = new ListNode(0);
    let cursor = root;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1: number = l1?.val ?? 0;
        const val2: number = l2?.val ?? 0;
        const sumVal = val1 + val2 + carry;

        carry = sumVal >= 10 ? 1 : 0;

        const sumNode = new ListNode(sumVal % 10);
        cursor.next = sumNode;
        cursor = sumNode;

        l1 &&= l1.next;
        l2 &&= l2.next;
    }

    return root.next;
};


// 243
const list1 = new ListNode(2)
list1.next = new ListNode(4)
list1.next.next = new ListNode(3)

// 564
const list2 = new ListNode(5)
list2.next = new ListNode(6)
list2.next.next = new ListNode(4)

// 708
console.log(addTwoNumbers(list1, list2));
