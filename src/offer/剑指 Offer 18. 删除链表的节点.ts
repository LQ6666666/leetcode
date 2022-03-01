import { ListNode } from "../utils";

// function deleteNode(head: ListNode | null, val: number): ListNode | null {
//     if (head === null) return null;

//     let current: ListNode | null = head;
//     let prev: ListNode | null = null;
//     while (current !== null) {
//         if (current.val === val) {
//             // 头结点就是要删除的节点
//             if (prev === null) {
//                 return current.next;
//             } else {
//                 prev.next = current.next;
//                 current.next = null;
//                 return head;
//             }
//         } else {
//             prev = current;
//             current = current.next;
//         }
//     }

//     // 到这里就是最后一个节点是要删除的节点了
//     prev!.next = null;
//     return head;
// };

function deleteNode(head: ListNode | null, val: number): ListNode | null {
    if (head === null) return null;
    if (head.val == val) {
        return head.next;
    }

    let prevNode: ListNode | null = head;
    let rearNode: ListNode | null = head.next;
    while (rearNode != null) {
        const delNode = rearNode;
        if (delNode.val == val) {
            prevNode!.next = prevNode!.next?.next ?? null;
        }

        prevNode = prevNode?.next ?? null;
        rearNode = rearNode.next;
    }
    return head;
};