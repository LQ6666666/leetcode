class TrieNode {
  private children: Map<string, TrieNode>;

  constructor(public isWordEnd = false) {
    this.children = new Map();
  }

  get(key: string) {
    return this.children.get(key);
  }

  set(key: string, val: TrieNode) {
    return this.children.set(key, val);
  }
}

class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  get trieRootNode() {
    return this.root;
  }

  insert(word: string): void {
    let node = this.root;

    for (const ch of word) {
      let next = node.get(ch);
      if (!next) {
        node.set(ch, (next = new TrieNode()));
      }

      node = next;
    }

    node.isWordEnd = true;
  }
}

class MagicDictionary {
  private trie: Trie;

  constructor() {
    this.trie = new Trie();
  }

  buildDict(dictionary: string[]): void {
    for (const item of dictionary) {
      this.trie.insert(item);
    }
  }

  search(searchWord: string): boolean {
    return this.dfs(searchWord, this.trie.trieRootNode, 0, false);
  }

  private dfs(searchWord: string, node: TrieNode, pos: number, modified: boolean): boolean {
    if (searchWord.length === pos) {
      return modified && node.isWordEnd;
    }

    // 不改
    const next = node.get(searchWord[pos]);
    if (next) {
      if (this.dfs(searchWord, next, pos + 1, modified)) {
        return true;
      }
    }

    // 改
    if (!modified) {
      for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(i + 97);
        if (letter !== searchWord[pos]) {
          const next = node.get(letter);
          if (next) {
            if (this.dfs(searchWord, next, pos + 1, true)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}

export { MagicDictionary };
