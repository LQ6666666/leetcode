function lemonadeChange(bills: number[]): boolean {
    const map = new Map<number, number>([[5, 0], [10, 0], [20, 0]]);

    for (const item of bills) {
        if (item === 10) {
            // 判断有没有 10
            const has5 = map.get(5)! >= 1;
            if (has5) {
                map.set(5, map.get(5)! - 1);
            } else {
                return false;
            }
        } else if (item === 20) {
            // 5 的个数
            const count5 = map.get(5)!;
            const count10 = map.get(10)!;
            if (count10 >= 1 && count5 >= 1) {
                // 判断有没有 一张 10 和 一张 5
                map.set(10, map.get(10)! - 1);
                map.set(5, map.get(5)! - 1);
            } else if (count5 >= 3) {
                // 判断有没有 三张 5
                map.set(5, map.get(5)! - 3);
            } else {
                return false;
            }
        }

        map.set(item, map.get(item)! + 1);
    }

    return true;
};

export { };