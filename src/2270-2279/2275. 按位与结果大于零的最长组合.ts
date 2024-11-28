function largestCombination(candidates: number[]): number {
    let ans = 0;
    // 统计 1 最多的一位
    const bits = (new Array(32)).fill(0);

    for (let c of candidates) {
        let i = 0;
        while (c > 0) {
            if ((c & 1) === 1) {
                bits[i]++;
                ans = Math.max(bits[i], ans);
            }

            i++;
            c = c >> 1;
        }
    }

    return ans;
};


export { };