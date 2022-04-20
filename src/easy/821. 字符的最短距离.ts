function shortestToChar(s: string, c: string): number[] {
    const n = s.length;
    const ans = (new Array(n)).fill(0);

    // 从前往后遍历
    for (let i = 0, index = -n; i < n; i++) {
        if (s.charAt(i) === c) {
            index = i;
        }

        ans[i] = i - index;
    }

    // 从后往前遍历
    for (let i = n - 1, index = Number.MAX_SAFE_INTEGER; i >= 0; i--) {
        if (s.charAt(i) === c) {
            index = i;
        }

        ans[i] = Math.min(Math.abs(i - index), ans[i]);
    }

    return ans;
};

export { };