class DLinkedNode {
    public prev: DLinkedNode | null;
    public next: DLinkedNode | null;
    constructor(public key: number = 0, public val: number = 0) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
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

        // 使用伪头部和伪尾部节点
        this.head = new DLinkedNode();
        this.tail = new DLinkedNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.cache = new Map<number, DLinkedNode>();
    }

    get(key: number): number {
        const node = this.cache.get(key);
        if (node === undefined) {
            return -1;
        }

        // 如果 key 存在，先通过哈希表定位，再移到头部
        this.moveToHead(node);
        return node.val;
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key);

        if (node === undefined) {
            // 如果 key 不存在，创建一个新的节点
            const newNode = new DLinkedNode(key, value);
            // 添加进哈希表
            this.cache.set(key, newNode);
            // 添加至双向链表的头部
            this.addToHead(newNode);
            this.size++;

            if (this.size > this.capacity) {
                // 如果超出容量，删除双向链表的尾部节点
                const tail = this.removeTail();
                // 删除哈希表中对应的项
                this.cache.delete(tail.key);
                this.size--;
            }
        } else {
            // 如果 key 存在，先通过哈希表定位，再修改 value，并移到头部
            node.val = value;
            this.moveToHead(node);
        }
    }

    private addToHead(node: DLinkedNode) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    private removeNode(node: DLinkedNode) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    private moveToHead(node: DLinkedNode) {
        this.removeNode(node);
        this.addToHead(node);
    }

    private removeTail(): DLinkedNode {
        const node = this.tail.prev!;
        this.removeNode(node);
        return node;
    }
}