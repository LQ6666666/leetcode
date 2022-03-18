class DLinkedNode {
    constructor(
        public key: number = 0,
        public val: number = 0,
        public next: DLinkedNode | null = null,
        public prev: DLinkedNode | null = null
    ) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class LRUCache {
    private cache: Map<number, DLinkedNode>;
    private size: number;
    private head: DLinkedNode;
    private tail: DLinkedNode;

    constructor(private capacity: number) {
        this.size = 0;
        this.capacity = capacity;
        this.cache = new Map<number, DLinkedNode>();
        this.head = new DLinkedNode();
        this.tail = new DLinkedNode();

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        const node = this.cache.get(key);
        if (node === undefined) {
            return -1;
        }

        this.moveToHead(node);
        return node.val;
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key);

        if (node === undefined) {
            const newNode = new DLinkedNode(key, value);
            this.cache.set(key, newNode);
            this.size++;
            this.addToHead(newNode);

            if (this.size > this.capacity) {
                const node = this.removeTail();
                this.cache.delete(node.key);
                this.size--;
            }

        } else {
            node.val = value;
            this.moveToHead(node);
        }
    }

    private moveToHead(node: DLinkedNode): void {
        this.removeNode(node);
        this.addToHead(node);
    }

    private addToHead(node: DLinkedNode) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    private removeNode(node: DLinkedNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev
    }

    private removeTail(): DLinkedNode {
        const node = this.tail.prev!;
        this.removeNode(node);
        return node;
    }
}


export { };
