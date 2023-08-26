class TrieNode {
  private childrenMap: Map<string, TrieNode>;

  constructor(public isWordEnd = false) {
    this.childrenMap = new Map();
  }

  get(key: string) {
    return this.childrenMap.get(key) ?? null;
  }

  set(key: string, val: TrieNode) {
    this.childrenMap.set(key, val);
  }
}

class Trie {
  public root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const ch of word) {
      let next = node.get(ch);
      if (next === null) {
        next = new TrieNode();
        node.set(ch, next);
      }
      node = next;
    }
    node.isWordEnd = true;
  }
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const n = s.length;
  const trie = new Trie();
  for (const word of wordDict) {
    trie.insert(word);
  }
  const failMemo = new Array<boolean>(n).fill(false);
  return dfs(0);

  function dfs(pos: number): boolean {
    if (failMemo[pos]) return false;
    if (pos === n) return true;
    // 每次都从 root 开始找
    let node = trie.root;
    for (let i = pos; i < n; i++) {
      const next = node.get(s[i]);
      if (next) {
        // 是不是单词
        if (next.isWordEnd && dfs(i + 1)) {
          return true;
        }
        node = next;
      } else {
        break;
      }
    }

    failMemo[pos] = true;
    return false;
  }
}

export { wordBreak };
