import { ListNode } from "../utils";

// function reverseList(head: ListNode | null): ListNode | null {
//     if (head === null) return null;

//     let newHead: ListNode | null = null;
//     let current: ListNode | null = head;

//     while (current !== null) {
//         let temp: ListNode | null = new ListNode(current.val);
//         temp.next = newHead;
//         newHead = temp;

//         current = current.next;
//     }

//     return newHead;
// };

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;

    let prev: ListNode | null = null;
    let current: ListNode | null = head;

    while (current !== null) {
        let next: ListNode | null = current.next;
        // 把当前节点的 next 改成前一个
        current.next = prev;
        // 更新前一个节点
        prev = current;
        // 走一步
        current = next;
    }

    return prev;
};