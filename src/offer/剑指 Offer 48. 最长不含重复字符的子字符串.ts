function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) return 0;
    let ret = 0, index = -1;
    const map = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            index = Math.max(index, map.get(s[i])!);
        }

        map.set(s[i], i);
        ret = Math.max(ret, i - index);
    }

    return ret;
};

export { };