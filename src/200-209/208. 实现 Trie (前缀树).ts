class TrieNode {
    private map: Map<string, TrieNode>;

    constructor(public isWord: boolean = false,) {
        this.map = new Map<string, TrieNode>();
    }

    get(key: string) {
        return this.map.get(key);
    }

    set(key: string, value: TrieNode) {
        return this.map.set(key, value);
    }
}

class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node: TrieNode = this.root;
        for (const c of word) {
            let value = node.get(c);

            if (value === undefined) {
                node.set(c, (value = new TrieNode()));
            }

            node = value;
        }
        node.isWord = true;
    }

    search(word: string): boolean {
        return !!this.traverse(word)?.isWord;
    }

    startsWith(prefix: string): boolean {
        return !!this.traverse(prefix);
    }

    private traverse(word: string) {
        let node: TrieNode = this.root;

        for (const c of word) {
            const value = node.get(c);
            if (value === undefined) {
                return null;
            }
            node = value;
        }

        return node;
    }
}


export { };