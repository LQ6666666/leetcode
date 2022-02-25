function findMinDifference(timePoints: string[]): number {
    const len = timePoints.length;

    if (len > 1440) return 0;

    if (len !== (new Set(timePoints)).size) {
        return 0;
    }

    const minutes: number[] = [];

    for (const item of timePoints) {
        const [h, m] = item.split(":");
        minutes.push(+h * 60 + +m);
    }

    minutes.sort((a, b) => a - b);

    let ans = Infinity;

    for (let i = 1; i < len; i++) {
        const diff = minutes[i] - minutes[i - 1];

        if (diff < ans) {
            ans = diff;
        }
    }

    return Math.min(ans, minutes.at(0)! + 1440 - minutes.at(-1)!);
};


// console.log(findMinDifference(["23:59", "00:00"]));
// console.log(findMinDifference(["01:11", "08:59"])); // 468
// console.log(findMinDifference(["00:00", "23:59", "00:00"]));
// console.log(findMinDifference(["01:01", "02:01", "03:00"]));
// console.log(findMinDifference(["00:00", "04:00", "22:00"]));
// console.log(findMinDifference(["04:00", "23:00"]));
// console.log(findMinDifference(["01:39", "10:26", "21:43"]));
// console.log(findMinDifference(["10:32", "14:55", "13:03", "15:52", "15:05"]));
