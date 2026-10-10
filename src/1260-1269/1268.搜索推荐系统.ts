function suggestedProducts(products: string[], searchWord: string): string[][] {
  const trie = new Trie();
  for (const word of products) {
    trie.insert(word);
  }
  const ans: string[][] = [];
  let word = "";
  for (const c of searchWord) {
    word += c;
    ans.push(trie.startsWith(word));
  }
  return ans;
}

class TrieNode {
  private map: Map<string, TrieNode>;

  constructor(public word: string | null = null) {
    this.map = new Map();
  }

  get(key: string) {
    return this.map.get(key);
  }

  set(key: string, value: TrieNode) {
    return this.map.set(key, value);
  }

  keys() {
    return Array.from(this.map.keys());
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const c of word) {
      let next = node.get(c);
      if (!next) {
        node.set(c, (next = new TrieNode()));
      }
      node = next;
    }
    node.word = word;
  }

  startsWith(prefix: string): string[] {
    let node = this.root;
    let result: string[] = [];

    for (const c of prefix) {
      const next = node.get(c);
      if (!next) {
        return result;
      }
      node = next;
    }

    let queue = [node];
    while (queue.length > 0) {
      if (result.length === 3) {
        break;
      }

      const node = queue.pop()!;
      if (node.word !== null) {
        result.push(node.word);
      }
      node
        .keys()
        .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
        .forEach(key => {
          queue.push(node.get(key)!);
        });
    }
    return result;
  }
}

export {};
