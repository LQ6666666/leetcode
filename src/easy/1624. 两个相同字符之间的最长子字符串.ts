function maxLengthBetweenEqualCharacters(s: string): number {
    let ans = -1;
    const map = new Map<string, number>();

    for (let i = 0, len = s.length; i < len; i++) {
        const char = s.charAt(i);
        // 记录字符的位置
        // 如果有这个字符，就能拿到这个字符的第一次的位置
        if (map.has(char)) {
            const index = map.get(char)!;
            const value = i - index - 1;

            if (value > ans) {
                ans = value;
            }
        } else {
            map.set(char, i);
        }
    }

    return ans;
};