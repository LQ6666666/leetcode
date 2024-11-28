type Fn = (...params: any[]) => any;

class TrieNode {
  private children: Map<any, TrieNode>;

  constructor(public val: any, public isResult: boolean) {
    this.children = new Map<any, any>();
  }

  get(key: any) {
    return this.children.get(key) ?? null;
  }

  set(key: any, val: any) {
    return this.children.set(key, val);
  }
}

/**
 * 使用 args 构建一个前缀树
 */
function memoize(fn: Fn): Fn {
  const root = new TrieNode(-1, false);
  return function (...args) {
    let node = root;
    for (const arg of args) {
      let newNode = node.get(arg);
      if (newNode === null) {
        node.set(arg, (newNode = new TrieNode(-1, false)));
      }
      node = newNode;
    }

    if (node.isResult) return node.val;

    node.isResult = true;
    return (node.val = fn(...args));
  };
}

export {};
