function findClosest(words: string[], word1: string, word2: string): number {
    const n = words.length;
    let ans = n;

    let n1 = -1;
    let n2 = -1;

    for (let i = 0; i < n; i++) {
        const word = words[i];
        if (word === word1) {
            n1 = i;
        }

        if (word === word2) {
            n2 = i;
        }

        if (n1 !== -1 && n2 !== -1) {
            ans = Math.min(ans, Math.abs(n1 - n2));
        }
    }

    return ans;
};

export { };