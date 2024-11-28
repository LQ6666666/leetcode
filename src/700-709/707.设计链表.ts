class DLinkedNode {
  constructor(
    public val: number,
    public prev: DLinkedNode | null = null,
    public next: DLinkedNode | null = null
  ) {}
}

class MyLinkedList {
  private head: DLinkedNode;
  private tail: DLinkedNode;
  private size: number;

  constructor() {
    this.head = new DLinkedNode(-1);
    this.tail = new DLinkedNode(-1);
    this.size = 0;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index: number): number {
    return this.findNodeByIndex(index)?.val ?? -1;
  }

  addAtHead(val: number): void {
    const node = new DLinkedNode(val);
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;

    this.size++;
  }

  addAtTail(val: number): void {
    const node = new DLinkedNode(val);
    node.next = this.tail;
    node.prev = this.tail.prev;
    this.tail.prev!.next = node;
    this.tail.prev = node;

    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0) {
      this.addAtHead(val);
      return
    }

    if(index === this.size) {
      this.addAtTail(val);
      return;
    }

    const node = this.findNodeByIndex(index);
    if (node === null) return;

    const newNode = new DLinkedNode(val);
    newNode.next = node;
    newNode.prev = node.prev;
    node.prev!.next = newNode;
    node.prev = newNode;

    this.size++;
  }

  deleteAtIndex(index: number): void {
    const node = this.findNodeByIndex(index);
    if (node === null) return;

    node.prev!.next = node.next;
    if(node.next) {
      node.next.prev = node.prev;
    }
    node.next = null;
    node.prev = null;

    this.size--;
  }

  private findNodeByIndex(index: number): DLinkedNode | null {
    if (index < 0 || index >= this.size) return null;

    let i = 0;
    let cur: DLinkedNode | null = this.head.next;
    while (i < index && cur) {
      i++;
      cur = cur.next;
    }
    return cur;
  }
}


const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
console.log(linkedList.get(1));            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
console.log(linkedList.get(1));            //返回3


export { };
