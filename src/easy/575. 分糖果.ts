function distributeCandies(candyType: number[]): number {
    const length: number = (new Set<number>(candyType)).size;

    const half: number = candyType.length / 2;

    return length >= half ? half : length;
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]));
console.log(distributeCandies([1, 1, 2, 3]));
console.log(distributeCandies([6, 6, 6, 6]));
