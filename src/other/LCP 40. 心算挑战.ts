function maxmiumScore(cards: number[], cnt: number): number {
    const n = cards.length;

    // 1. 排序
    cards.sort((a, b) => a - b);

    // 2. 计算最后 cnt 个数之和
    const part = cards.slice(-cnt);
    let total = part.reduce((prev, cur) => prev + cur);

    // 3. 判断是否是偶数
    if (total % 2 === 0) {
        return total;
    }

    // 4. 找到之后最小的奇数和最小的偶数
    let minOdd: number | undefined;
    let minEven: number | undefined;
    for (const item of part) {
        if (item % 2 === 0) {
            if (minEven === undefined) {
                minEven = item;
            }
        } else {
            if (minOdd === undefined) {
                minOdd = item;
            }
        }

        if (minOdd !== undefined && minEven !== undefined) {
            break;
        }
    }

    // 5.找到之前最大的偶数，和最大的奇数
    let maxOdd: number | undefined;
    let maxEven: number | undefined;
    for (let i = n - cnt - 1; i >= 0; i--) {
        const item = cards[i];

        if (item % 2 === 0) {
            if (maxEven === undefined) {
                maxEven = item;
            }
        } else {
            if (maxOdd === undefined) {
                maxOdd = item;
            }
        }

        if (maxOdd !== undefined && maxEven !== undefined) {
            break;
        }
    }

    let res1 = Number.MIN_SAFE_INTEGER;
    // 6. 减去最小的偶数 + 最大的奇数
    if (minEven !== undefined && maxOdd !== undefined) {
        res1 = total - minEven + maxOdd;
    }

    let res2 = Number.MIN_SAFE_INTEGER;
    // 7. 减去最小的奇数 + 最大的偶数
    if (minOdd !== undefined && maxEven !== undefined) {
        res2 = total - minOdd + maxEven;
    }

    if (res1 === Number.MIN_SAFE_INTEGER && res1 === res2) {
        return 0
    }

    return Math.max(res1, res2);
};

export { };