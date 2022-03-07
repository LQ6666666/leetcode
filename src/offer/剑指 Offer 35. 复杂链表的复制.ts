import { Node } from "../utils";

function copyRandomList(head: null | Node): Node | null {
    if (head === null) return null;

    const map = new Map<Node, Node>();
    let cur: null | Node = head;
    while (cur !== null) {
        map.set(cur, new Node(cur.val))
        cur = cur.next;
    }

    cur = head;
    while (cur !== null) {
        map.get(cur)!.next = map.get(cur.next!) ?? null
        map.get(cur)!.random = map.get(cur.random!) ?? null
        cur = cur.next;
    }

    return map.get(head)!;
}