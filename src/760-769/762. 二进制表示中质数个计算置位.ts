function countPrimeSetBits(left: number, right: number): number {
    const set = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
    let ans = 0;

    for (let i = left; i <= right; i++) {
        // 计算 1 的个数
        let x = i, count = 0;
        while (x != 0) {
            x = x & (x - 1);
            count++;
        }
        // 判断 1 的个数是不是质数
        if (set.has(count)) {
            ans++;
        }
    }

    return ans;
};

export { };