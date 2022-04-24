function binaryGap(n: number): number {
    let ans = 0;
    // 上一个 1 的位置
    let last = -1;

    let i = 0;
    while (n !== 0) {
        if ((n & 1) === 1) {
            if (last !== -1) {
                ans = Math.max(ans, i - last);
            }

            last = i;
        }

        i++;
        n = n >> 1;
    }

    return ans;
};