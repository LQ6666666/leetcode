class DLinkedNode {
  constructor(
    public val: number,
    public next: DLinkedNode | null = null,
    public prev: DLinkedNode | null = null
  ) {}
}

class FrontMiddleBackQueue {
  private head: DLinkedNode;
  private tail: DLinkedNode;
  private size: number;
  private middle: DLinkedNode | null;

  constructor() {
    this.head = new DLinkedNode(-1);
    this.tail = new DLinkedNode(-1);
    this.size = 0;
    this.middle = null;

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  pushFront(val: number): void {
    const node = new DLinkedNode(val);
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;

    this.size++;
    if (this.size === 1) {
      this.middle = node;
    } else {
      if (this.size % 2 === 0) {
        this.middle = this.middle!.prev;
      }
    }
  }
  private insert(prev: DLinkedNode, next: DLinkedNode, node: DLinkedNode) {
    node.next = next;
    node.prev = prev;
    next.prev = node;
    prev.next = node;
  }

  pushMiddle(val: number): void {
    if (this.size === 0) {
      this.pushFront(val);
    } else {
      const node = new DLinkedNode(val);

      if (this.size % 2 === 0) {
        this.insert(this.middle!, this.middle!.next!, node);
      } else {
        this.insert(this.middle!.prev!, this.middle!, node);
      }

      this.middle = node;
      this.size++;
    }
  }

  pushBack(val: number): void {
    if (this.size === 0) {
      this.pushFront(val);
    } else {
      const node = new DLinkedNode(val);
      node.next = this.tail;
      node.prev = this.tail.prev;
      this.tail.prev!.next = node;
      this.tail.prev = node;
      this.size++;

      if (this.size % 2 !== 0) {
        this.middle = this.middle!.next;
      }
    }
  }

  popFront(): number {
    if (this.size === 0) return -1;

    const node = this.head.next!;
    this.head.next = node.next;
    node.next!.prev = this.head;

    this.size--;
    if (this.size % 2 !== 0) {
      this.middle = this.middle!.next;
    }

    node.next = null;
    node.prev = null;

    return node.val;
  }

  popMiddle(): number {
    if (this.size === 0) return -1;

    const node = this.middle!;
    node.prev!.next = node.next;
    node.next!.prev = node.prev;

    this.size--;
    if (this.size === 0) {
      this.middle = null;
    } else {
      if (this.size % 2 === 0) {
        this.middle = this.middle!.prev;
      } else {
        this.middle = this.middle!.next;
      }
    }

    node.next = null;
    node.prev = null;

    return node.val;
  }

  popBack(): number {
    if (this.size === 0) return -1;

    const node = this.tail.prev!;
    node.prev!.next = node.next;
    node.next!.prev = node.prev;

    this.size--;
    if (this.size === 0) {
      this.middle = null;
    } else {
      if (this.size % 2 === 0) {
        this.middle = this.middle!.prev;
      }
    }

    node.next = null;
    node.prev = null;

    return node.val;
  }

  print() {
    let node = this.head.next;
    const list: number[] = [];
    while (node && node !== this.tail) {
      list.push(node.val);
      node = node.next;
    }
    return list;
  }

  getMiddle() {
    return this.middle?.val;
  }
}

// const q = new FrontMiddleBackQueue();
// q.pushFront(1); // [1]
// q.pushBack(2); // [1, 2]
// q.pushMiddle(3); // [1, 3, 2]
// q.pushMiddle(4); // [1, 4, 3, 2]
// q.popFront(); // 返回 1 -> [4, 3, 2]
// q.popMiddle(); // 返回 3 -> [4, 2]
// q.popMiddle(); // 返回 4 -> [2]
// q.popBack(); // 返回 2 -> []
// q.popFront(); // 返回 -1 -> [] （队列为空）

// const q = new FrontMiddleBackQueue();
// q.pushMiddle(1); // [1]
// q.pushMiddle(2); // [1, 2]
// q.pushMiddle(3); // [1, 2, 3]
// q.popMiddle(); // 返回 2 -> [1, 3]
// q.popMiddle(); // 返回 1 -> [3]
// q.popMiddle(); // 返回 3 -> []

// const q = new FrontMiddleBackQueue();
// q.popMiddle();
// q.pushMiddle(5422); // [5422]
// q.pushMiddle(532228); // [532228, 5422]
// q.popBack(); // [532228]
// q.pushMiddle(206486); // [206486, 532228]
// q.pushBack(351927); // [206486, 532228, 351927]
// q.popFront();
// q.popFront();
// q.pushMiddle(73577);
// q.pushMiddle(785914);
// q.pushMiddle(765630);
// q.popMiddle();
// q.pushMiddle(208060);
// q.popMiddle();
// q.pushMiddle(5928866);

// const q = new FrontMiddleBackQueue();
// q.pushMiddle(772749); // [339812,264112,772749]
// q.pushMiddle(264112);
// q.pushFront(339812);
// q.popFront();
// q.popMiddle();
// q.popMiddle();
// q.pushMiddle(173630);
// q.pushMiddle(986451);
// q.pushMiddle(711423);
// q.pushFront(288691);
// q.pushMiddle(661516);
// q.pushFront(539917);
// q.popMiddle();
// q.popMiddle();
// q.pushMiddle(30316);
// q.popMiddle();

// const q = new FrontMiddleBackQueue();
// q.popMiddle();
// q.popMiddle();
// q.pushMiddle(773222); // [773222]
// q.pushMiddle(279355); // [279355, 773222]
// q.popMiddle();
// q.popMiddle();
// q.popMiddle();
// q.popBack();
// q.popMiddle();
// q.popFront();
// q.pushBack(448905); // [448905]
// q.popFront();
// q.pushMiddle(168284); // [168284]
// q.pushMiddle(874541); // [874541, 168284]
// q.popMiddle();
// q.popBack();
// q.pushFront(15656); // [15656]
// q.popMiddle();
// q.pushMiddle(803226); // [803226]
// q.pushMiddle(720129); // [720129, 803226]
// q.pushMiddle(626048); // [720129, 626048, 803226]
// q.popMiddle(); // [720129, 626048]
// q.pushMiddle(860306); // [720129, 860306, 626048]
// q.popBack(); // [720129, 860306]
// q.pushMiddle(630886); // [626048, 630886, 860306]
// q.popMiddle();
// q.popMiddle();
// q.popMiddle();
// q.popMiddle();
// q.popFront();
// q.pushMiddle(837735);
// q.pushMiddle(414354);
// q.pushMiddle(404946);
// q.pushFront(88719);

export {};
