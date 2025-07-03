class WordsFrequency {
  private root: TrieNode;

  constructor(book: string[]) {
    const root = (this.root = new TrieNode());

    for (const word of book) {
      let node: TrieNode = root;
      for (const letter of word) {
        let nextNode = node.get(letter);
        if (nextNode === undefined) {
          node.set(letter, (nextNode = new TrieNode()));
        }
        node = nextNode;
      }
      node.count++;
    }
  }

  get(word: string): number {
    const n = word.length;

    let node: TrieNode | undefined = this.root;
    for (let i = 0; i < n; i++) {
      const letter = word[i];
      if (node === undefined) {
        break;
      }
      node = node.get(letter);
    }
    return node === undefined ? 0 : node.count;
  }
}

class TrieNode {
  public count: number;
  private map: Map<string, TrieNode>;

  constructor() {
    this.count = 0;
    this.map = new Map();
  }

  get(key: string) {
    return this.map.get(key);
  }

  set(key: string, node: TrieNode) {
    this.map.set(key, node);
  }
}

export { WordsFrequency };
