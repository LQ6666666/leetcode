// 滑动窗口
function reverseBits(num: number): number {
    let start = 0;
    let count = 0;
    let ans = -1;

    for (let end = 0; end < 32; end++) {
        if ((num & (1 << end)) === 0) {
            count++;
        };

        while (count > 1) {
            if ((num & (1 << start)) === 0) {
                count--;
            }

            start++;
        }

        ans = Math.max(ans, end - start + 1);
    }

    return ans;
}

export { };