function digitSum(s: string, k: number): string {
    const n = s.length;
    if (n <= k) return s;
    // 1. 分组 k 个一组
    const arr: string[] = [];
    for (let i = 0; i < n; i += k) {
        arr.push(s.slice(i, i + k));
    }

    // 2. 计算每一部分的数字和组成新的字符串
    const ret = arr.reduce((prev, cur) => {
        let value = 0;
        for (const ch of cur) {
            value += +ch;
        }
        return prev + value;
    }, "");

    return digitSum(ret, k);
};

export { };