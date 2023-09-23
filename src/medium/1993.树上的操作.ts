class LockingTree {
  private lockNodeUser: number[];
  private children: number[][];

  constructor(public parent: number[]) {
    const n = parent.length;
    this.lockNodeUser = new Array(n).fill(-1);
    // 建树
    // 每个节点的子节点列表
    this.children = Array.from({ length: n }, () => []);
    for (let i = 0; i < n; i++) {
      const p = parent[i];
      if (p !== -1) {
        this.children[p].push(i);
      }
    }
  }

  lock(num: number, user: number): boolean {
    if (this.lockNodeUser[num] === -1) {
      this.lockNodeUser[num] = user;
      return true;
    }
    return false;
  }

  unlock(num: number, user: number): boolean {
    if (this.lockNodeUser[num] === user) {
      this.lockNodeUser[num] = -1;
      return true;
    }
    return false;
  }

  upgrade(num: number, user: number): boolean {
    // 1.指定节点当前状态为未上锁
    // 2.指定节点没有任何上锁的祖先节点
    let parent = num;
    while (parent !== -1) {
      if (this.lockNodeUser[parent] === -1) {
        parent = this.parent[parent];
      } else {
        return false;
      }
    }

    // 3.指定节点至少有一个上锁状态的子孙节点（可以是 任意 用户上锁的）
    if (this.checkAndUnlockDescendant(num)) {
      // 4.满足上面 3 条才能上锁
      // 5.给所有的子孙节点解锁
      this.lockNodeUser[num] = user;
      return true;
    } else {
      return false;
    }
  }

  private checkAndUnlockDescendant(num: number): boolean {
    let result = false;
    const queue = this.children[num].slice();
    while (queue.length) {
      const i = queue.shift()!;
      if (this.lockNodeUser[i] !== -1) {
        this.lockNodeUser[i] = -1;
        result = true;
      }
      queue.push(...this.children[i]);
    }

    return result;
  }
}

export { LockingTree };
