function findJudge(n: number, trust: number[][]): number {
    if (trust.length === 0) {
        return n === 1 ? 1 : -1;
    }

    // 记录这个人被哪些人信认了
    const map: Map<number, Set<number>> = new Map<number, Set<number>>();

    // 找到一个谁都不信认的人
    for (let i = 0; i < trust.length; i++) {
        const [person1, person2] = trust[i];

        if (!map.has(person1)) {
            map.set(person1, new Set());
        }

        if (map.has(person2)) {
            map.get(person2)!.add(person1);
        } else {
            map.set(person2, new Set([person1]));
        }
    }
    

    for (let i = 1; i <= n; i++) {
        if (map.get(i)?.size !== n - 1) {
            continue;
        }

        // 这个人不信认任何人
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                continue;
            }

            if (map.get(j)!.has(i)) {
                return -1;
            }
        }

        return i;
    }

    return -1;
};


// console.log(findJudge(2, [[1, 2]]));// 2
// console.log(findJudge(3, [[1, 3], [2, 3]]));// 3
// console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]));// -1
// console.log(findJudge(3, [[1, 2], [2, 3]]));// -1
// console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]));// 3
// console.log(findJudge(4, [[1, 3], [1, 4], [2, 3]])); // -1
console.log(findJudge(11, [[1, 8], [1, 3], [2, 8], [2, 3], [4, 8], [4, 3], [5, 8], [5, 3], [6, 8], [6, 3], [7, 8], [7, 3], [9, 8], [9, 3], [11, 8], [11, 3]])); // -1