function thirdMax(nums: number[]): number {
    const arr: number[] = Array.from(new Set(nums)).sort((a, b) => b - a);

    return arr[2] ?? arr[0];
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));

export { }

