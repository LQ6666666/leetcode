function chalkReplacer1(chalk: number[], k: number): number {
    const sum = chalk.reduce((prev, cur) => prev + cur, 0);
    let count = k % sum;
    let index = 0;

    while (count > 0) {
        count -= chalk[index];

        if (count >= 0) {
            index++;
        }
    }

    return index;
};

function chalkReplacer(chalk: number[], k: number): number {
    if (chalk[0] > k) return 0;

    for (let i = 1; i < chalk.length; i++) {
        chalk[i] += chalk[i - 1];

        if (chalk[i] > k) {
            return i;
        }
    }

    k = k % chalk[chalk.length - 1];

    let left = 0, right = chalk.length - 1;
    while (left <= right) {
        const middle = left + ((right - left) >> 1);
        if (chalk[middle] <= k) {
            left = left + 1
        } else {
            right = right - 1;
        }
    }

    return left;
};

export { };