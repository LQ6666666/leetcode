function oneEditAway(first: string, second: string): boolean {
    // 1. 相等直接返回
    if (first === second) return true;
    // 2. 长度相差大于 1 直接返回
    const n = first.length, m = second.length;

    if (Math.abs(n - m) > 1) return false;

    if (n === m) {
        let count = 1;
        // 替换字符：按顺序比较
        for (let i = 0; i < n; i++) {
            if (first[i] === second[i]) {
                continue;
            }

            if (count === 0) {
                return false;
            }

            count--;
        }
    } else if (n > m) {
        // 删除字符：按顺序比较
        let count = 1;
        let i = 0, j = 0;
        while (i < n) {
            if (first[i] === second[j]) {
                i++;
                j++;
                continue;
            }

            if (count === 0) {
                return false;
            }

            i++;
            count--;
        }
    } else {
        // 添加字符：按顺序比较
        let count = 1;
        let i = 0, j = 0;
        while (i < n) {
            if (first[i] === second[j]) {
                i++;
                j++;
                continue;
            }

            if (count === 0) {
                return false;
            }

            j++;
            count--;
        }
    }

    return true;
};


export { };