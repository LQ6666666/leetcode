export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

class LinkedNode<T = any> {
  constructor(public val: T, public next: LinkedNode | null = null) {}
}

export class Queue<T = any> {
  public size: number;
  private head: LinkedNode<T> | null;
  private tail: LinkedNode<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  /** 入队 */
  enQueue(value: T): void {
    const newNode = new LinkedNode<T>(value);
    // 当前链表还是空
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const tailNode = this.tail!;
      tailNode.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  /** 出队 */
  deQueue(): T | null {
    if (this.size === 0) {
      return null;
    }

    const headNode = this.head!;
    this.head = headNode.next;
    this.size--;

    if (this.size === 0) {
      this.tail = null;
    }

    return headNode.val;
  }

  /** 是否为空 */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /** 获取队列顶部 */
  front(): T | null {
    if (this.size === 0) {
      return null;
    }

    return this.head!.val;
  }

  /** 清空 */
  clear(): void {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
}

export const MOD = 1000000007;
