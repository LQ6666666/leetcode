function findRelativeRanks(score: number[]): string[] {
    const map: Map<number, string> = new Map<number, string>();

    score.forEach(item => map.set(item, ""));

    // 从大到小排序
    const keys = Array.from<number>(map.keys()).sort((a, b) => b - a);

    const RANKS: { [key: string]: string } = {
        0: "Gold Medal",
        1: "Silver Medal",
        2: "Bronze Medal",
    }

    keys.forEach((item, index) => {
        map.set(item, RANKS[index] ?? `${index + 1}`);
    });

    return Array.from(map.values());
};



console.log(findRelativeRanks([5, 4, 3, 2, 1]));    // ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
console.log(findRelativeRanks([10, 3, 8, 9, 4]));   // ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
