function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let start = 0, end = 0;
    let ans = 0;

    const set = new Set<string>();
    while (end < n) {
        const current = s.charAt(end);

        if (set.has(current)) {
            set.delete(s.charAt(start));
            start++;
        } else {
            set.add(current);
            end++;
            ans = Math.max(ans, set.size);
        }
    }

    return ans;
};

export { };