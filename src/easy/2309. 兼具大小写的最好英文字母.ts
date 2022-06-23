function greatestLetter(s: string): string {
    const set = new Set();
    let ans = "";

    for (const ch of s) {
        set.add(ch);

        // 有小写字母，还有大写字母
        const upper = ch.toLocaleUpperCase()
        if (set.has(upper) && set.has(ch.toLocaleLowerCase())) {
            if (ans === "" || upper >= ans) {
                ans = upper;
            }
        }
    }

    return ans;
};
export { };