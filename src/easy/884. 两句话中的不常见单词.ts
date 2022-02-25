function uncommonFromSentences(s1: string, s2: string): string[] {
    let ans: string[] = [];
    const map = new Map<string, number>();
    const words = (s1 + " " + s2).split(/\s/);

    for (const word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word)! + 1);
        } else {
            map.set(word, 1);
        }
    }

    map.forEach((value, key) => {
        if (value === 1) {
            ans.push(key);
        }
    });

    return ans;
};