class TrieNode {
  public isWord: boolean;
  public value: number;
  private map: Map<string, TrieNode>;

  constructor() {
    this.isWord = false;
    this.value = 0;
    this.map = new Map();
  }

  set(key: string, node: TrieNode): void {
    this.map.set(key, node);
  }

  get(key: string) {
    return this.map.get(key);
  }

  keys() {
    return Array.from(this.map.keys());
  }
}

class MapSum {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(key: string, val: number): void {
    let node = this.root;
    for (const ch of key) {
      let next = node.get(ch);
      if (!next) {
        node.set(ch, (next = new TrieNode()));
      }
      node = next;
    }
    node.value = val;
  }

  sum(prefix: string): number {
    let node = this.root;
    for (const ch of prefix) {
      let next = node.get(ch);
      if (!next) {
        return 0;
      }
      node = next;
    }
    return this.dfs(node);
  }

  private dfs(node: TrieNode | undefined): number {
    if (!node) return 0;
    let sum = node.value;
    const keys = node.keys();
    for (const key of keys) {
      sum += this.dfs(node.get(key));
    }
    return sum;
  }
}

export { MapSum };
