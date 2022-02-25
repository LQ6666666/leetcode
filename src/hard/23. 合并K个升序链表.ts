import { ListNode } from "../utils";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let array: number[] = [];

    for (const list of lists) {
        if (list === null) {
            continue;
        }

        array = array.concat(listNodeToArray(list));
    }

    array.sort((a, b) => a - b);

    return arrayToListNode(array);
};

const arrayToListNode = (array: number[]) => {
    const root: ListNode = new ListNode();
    let current: ListNode = root;

    let i = 0

    while (i !== array.length) {
        const node = new ListNode();
        node.val = array[i];
        current.next = node;
        current = node;
        i++;
    }

    return root.next;
}

const listNodeToArray = (root: ListNode) => {
    if (root === null) return [];

    const arr: number[] = []
    let current: ListNode = root;

    while (true) {
        arr.push(current.val)

        if (current.next === null) {
            return arr;
        }

        current = current.next;
    }
}

console.log(mergeKLists([arrayToListNode([1, 4, 5]), arrayToListNode([1, 3, 4]), arrayToListNode([2, 6])]));
console.log(mergeKLists([arrayToListNode([1])]));