class DLinkedNode {
    constructor(
        public key: number = 0,
        public value: number = 0,
        public prev: DLinkedNode | null = null,
        public next: DLinkedNode | null = null
    ) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    };
}

class LRUCache {
    cache: Map<number, DLinkedNode>;
    size: number;
    head: DLinkedNode;
    tail: DLinkedNode;

    constructor(public capacity: number) {
        this.cache = new Map<number, DLinkedNode>();
        this.capacity = capacity;
        this.size = 0;

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
        return node.value;
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key);

        if (node === undefined) {
            const newNode = new DLinkedNode(key, value);
            this.addToHead(newNode);
            this.cache.set(key, newNode);
            this.size++;

            if (this.size > this.capacity) {
                const node = this.removeTail();
                this.cache.delete(node.key);
                this.size--;
            }
        } else {
            node.value = value;
            this.moveToHead(node);
        }
    }

    moveToHead(node: DLinkedNode) {
        this.removeNode(node);
        this.addToHead(node)
    };

    addToHead(node: DLinkedNode) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    };

    removeTail(): DLinkedNode {
        const tail = this.tail.prev!;
        this.removeNode(tail);
        return tail;
    };

    removeNode(node: DLinkedNode) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    };
}


export { };