class TextEditor {
  private head: DLinkedNode;
  private tail: DLinkedNode;
  private current: DLinkedNode;

  constructor() {
    this.head = new DLinkedNode("");
    this.tail = new DLinkedNode("");

    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.head.prev = this.tail;
    this.tail.next = this.head;

    this.current = this.head;
  }

  addText(text: string): void {
    for (let i = 0; i < text.length; i++) {
      const node = new DLinkedNode(text[i]);
      this.insert(node, this.current);
      this.current = node;
    }
  }

  deleteText(k: number): number {
    let i = 0;
    while (i < k && this.current !== this.head) {
      const node = this.current;
      this.current = node.prev!;
      this.remove(node);
      i++;
    }
    return i;
  }

  cursorLeft(k: number): string {
    // 可以是 head
    while (k > 0 && this.current.prev !== this.tail) {
      this.current = this.current.prev!;
      k--;
    }
    return this.text();
  }

  cursorRight(k: number): string {
    while (k > 0 && this.current.next !== this.tail) {
      this.current = this.current.next!;
      k--;
    }
    return this.text();
  }

  private insert(node: DLinkedNode, anchor: DLinkedNode) {
    node.prev = anchor;
    node.next = anchor.next;
    anchor.next!.prev = node;
    anchor.next = node;
  }

  private remove(node: DLinkedNode) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    node.next = null;
    node.prev = null;
  }

  private print() {
    let temp = "";
    let node = this.head.next;
    while (node !== this.tail) {
      temp += this.current === node ? `[${node.val}]` : node!.val;
      node = node!.next;
    }
    return temp;
  }

  private text(): string {
    let ans = "";
    let node: DLinkedNode | null = this.current;
    for (let i = 0; i < 10 && node && node !== this.head; i++) {
      ans = node.val + ans;
      node = node.prev;
    }
    return ans;
  }
}

class DLinkedNode {
  public prev: DLinkedNode | null;
  public next: DLinkedNode | null;
  constructor(public val: string) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

export { TextEditor };
