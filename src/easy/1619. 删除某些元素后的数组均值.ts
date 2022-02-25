function trimMean(arr: number[]): number {
    let start = arr.length * 0.05;
    let end = arr.length - start;

    arr.sort((a, b) => a - b);

    let sum = 0;
    for (let i = start; i < end; i++) {
        sum = sum + arr[i];
    }

    return sum / (arr.length - (start * 2));
};