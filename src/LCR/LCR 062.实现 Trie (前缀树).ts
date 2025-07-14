class TrieNode {
  public isWord: boolean;
  private map: Map<string, TrieNode>;

  constructor() {
    this.isWord = false;
    this.map = new Map();
  }

  set(key: string, node: TrieNode): void {
    this.map.set(key, node);
  }

  get(key: string) {
    return this.map.get(key);
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    const n = word.length;
    let node = this.root;
    for (let i = 0; i < n; i++) {
      let next = node.get(word[i]);
      if (!next) {
        node.set(word[i], (next = new TrieNode()));
      }
      node = next;
    }

    node.isWord = true;
  }

  search(word: string): boolean {
    const node = this.traverse(word);
    return node ? node.isWord : false;
  }

  startsWith(prefix: string): boolean {
    return !!this.traverse(prefix);
  }

  private traverse(word: string): TrieNode | undefined {
    const n = word.length;
    let node = this.root;
    for (let i = 0; i < n; i++) {
      const next = node.get(word[i]);
      if (!next) {
        return undefined;
      }
      node = next;
    }
    return node;
  }
}

export { Trie };
