import { Node } from '../utils';

function copyRandomList(head: Node | null): Node | null {
    if (head === null) return null;

    let current: Node | null = head;
    const map = new Map<Node | null, Node | null>();

    while (current !== null) {
        map.set(current, new Node(current.val));
        current = current.next;
    }

    current = head;
    while (current !== null) {
        const clone = map.get(current)!;

        clone.next = map.get(current.next) ?? null;
        clone.random = map.get(current.random) ?? null;

        current = current.next;
    }

    return map.get(head)!;
};