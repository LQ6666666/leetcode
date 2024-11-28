function removeSubfolders(folder: string[]): string[] {
  const root = new TrieNode();

  const n = folder.length;
  for (let i = 0; i < n; i++) {
    const path = folder[i].slice(1).split("/");
    let cur = root;
    for (const name of path) {
      let node = cur.get(name);
      if (node === undefined) {
        cur.set(name, (node = new TrieNode()));
      }
      cur = node;
    }
    cur.ref = i;
  }

  const ans: string[] = [];
  const dfs = (node: TrieNode) => {
    if (node.ref !== -1) {
      ans.push(folder[node.ref]);
      return;
    }

    const children = node.getChildren();
    if (children.length) {
      for (const child of children) {
        dfs(child);
      }
    }
  };

  return dfs(root), ans;
}

class TrieNode {
  private map: Map<string, TrieNode>;

  constructor(public ref: number = -1) {
    this.map = new Map<string, TrieNode>();
  }

  get(key: string) {
    return this.map.get(key);
  }

  set(key: string, value: TrieNode) {
    return this.map.set(key, value);
  }

  getChildren() {
    return Array.from(this.map.values());
  }
}

function removeSubfolders1(folder: string[]): string[] {
  folder.sort();
  let ans = [folder[0]];
  const n = folder.length;

  for (let i = 1; i < n; i++) {
    const prev = ans.at(-1)!;
    const cur = folder[i];
    if (
      !(
        // 前一个的长度 小于 当前的长度
        prev.length < cur.length &&
        // 匹配前一个的前缀
        prev === folder[i].slice(0, prev.length) &&
        // 有结尾，表示后面还有
        folder[i].charAt(prev.length) === "/"
      )
    ) {
      ans.push(folder[i]);
    }
  }

  return ans;
}

export { removeSubfolders };
