function findAndReplacePattern(words: string[], pattern: string): string[] {
    const ans: string[] = [];

    for (const word of words) {
        if (match(word, pattern) && match(pattern, word)) {
            ans.push(word);
        }
    }

    return ans;
};

function match(word: string, pattern: string) {
    const map = new Map<string, string>();
    const n = word.length;

    for (let i = 0; i < n; i++) {
        const ch = word[i];

        if (map.has(ch)) {
            if (map.get(ch) !== pattern[i]) {
                return false;
            }
        } else {
            map.set(ch, pattern[i]);
        }
    }

    return true;
}

export { };