class DLinkNode {
  constructor(
    public key: number,
    public val: number,
    public freq: number = 1,
    public prev: DLinkNode | null = null,
    public next: DLinkNode | null = null
  ) {}
}

class LFUCache {
  private keyToNode: Map<number, DLinkNode>;
  private freqToDummy: Map<number, DLinkNode>;
  private minFreq: number;

  constructor(public capacity: number) {
    this.keyToNode = new Map();
    this.freqToDummy = new Map();
    this.minFreq = 0;
  }

  get(key: number): number {
    const node = this.getNode(key);
    return node ? node.val : -1;
  }

  put(key: number, value: number): void {
    const node = this.getNode(key);
    // 有这本书
    if (node) {
      // 更新 value
      node.val = value;
      return;
    }

    // 书太多了
    if (this.keyToNode.size === this.capacity) {
      const dummy = this.freqToDummy.get(this.minFreq);
      // 最左边那摞书的最下面的书
      const backNode = dummy!.prev!;
      this.removeNode(backNode);
      this.keyToNode.delete(backNode.key);
      // 这摞书是空的
      if (dummy?.prev === dummy) {
        this.freqToDummy.delete(this.minFreq);
      }
    }

    // 新书
    const newNode = new DLinkNode(key, value);
    this.keyToNode.set(key, newNode);
    // 放在「看过 1 次」的最上面
    this.pushFront((this.minFreq = 1), newNode);
  }

  private getNode(key: number): DLinkNode | null {
    const node = this.keyToNode.get(key);
    // 没有这本书
    if (node === undefined) {
      return null;
    }

    // 把这本书抽出来
    this.removeNode(node);
    const dummy = this.freqToDummy.get(node.freq);
    // 抽出来后，这摞书是空的
    if (dummy?.next === dummy) {
      // 移除空链表
      this.freqToDummy.delete(node.freq);
      if (this.minFreq === node.freq) {
        this.minFreq++;
      }
    }

    // 放在右边这摞书的最上面
    this.pushFront(++node.freq, node);
    return node;
  }

  /** 在链表头添加一个节点（把一本书放在最上面） */
  private pushFront(freq: number, node: DLinkNode) {
    let dummy = this.freqToDummy.get(freq);
    if (dummy === undefined) {
      dummy = this.newList();
      this.freqToDummy.set(freq, dummy);
    }

    node.prev = dummy;
    node.next = dummy.next;
    dummy.next!.prev = node;
    dummy.next = node;
  }

  /** 创建一个新的双向链表 */
  private newList() {
    const dummy = new DLinkNode(-1, -1);
    dummy.next = dummy;
    dummy.prev = dummy;
    return dummy;
  }

  private removeNode(node: DLinkNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}

export { LFUCache };
