import { LinkedNode } from "../utils";

class MyCircularQueue {
  private head: LinkedNode | null;
  private tail: LinkedNode | null;
  private size: number;

  constructor(public k: number) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    const node = new LinkedNode(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    const node = this.head!;
    this.head = node.next;
    this.size--;
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.head!.val;
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.tail!.val;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.k;
  }
}

export { MyCircularQueue };
