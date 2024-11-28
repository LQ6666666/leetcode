function minimumOperations(nums: number[]): number {
    const len = nums.length;
    const oddMap = new Map<number, number>();
    const evenMap = new Map<number, number>();

    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            evenMap.set(nums[i], (evenMap.get(nums[i]) ?? 0) + 1);
        } else {
            oddMap.set(nums[i], (oddMap.get(nums[i]) ?? 0) + 1);
        }
    }

    let a: number | undefined, b: number | undefined;

    const res1 = Array.from(oddMap.keys()).sort((a, b) => oddMap.get(b)! - oddMap.get(a)!);
    const res2 = Array.from(evenMap.keys()).sort((a, b) => evenMap.get(b)! - evenMap.get(a)!);

    if (res1[0] === res2[0]) {
        if (res1.length > res2.length) {
            a = res1[1];
            b = res2[0];
        } else {
            a = res1[0];
            b = res2[1];
        }

        if (a === undefined || b === undefined) {
            return Math.floor(len / 2);
        }
    } else {
        a = res1[0];
        b = res2[0];
    }

    let ans1 = 0;
    let ans2 = 0
    for (let i = 0; i < len; i++) {
        if (i % 2 === 0) {
            if (nums[i] !== b) ans1++;
            if (nums[i] !== a) ans2++;
        } else {
            if (nums[i] !== a) ans1++;
            if (nums[i] !== b) ans2++;
        }
    }

    return Math.min(ans1, ans2);
};

// console.log(minimumOperations([1, 2, 2, 2, 2]));
// console.log(minimumOperations([3, 1, 3, 2, 4, 3]));
// console.log(minimumOperations([1, 1, 1, 1, 1, 1, 1]));
console.log(minimumOperations([2, 1, 2, 2, 2, 2]));
console.log(minimumOperations([69, 91, 47, 74, 75, 94, 22, 100, 43, 50, 82, 47, 40, 51, 90, 27, 98, 85, 47, 14, 55, 82, 52, 9, 65, 90, 86, 45, 52, 52, 95, 40, 85, 3, 46, 77, 16, 59, 32, 22, 41, 87, 89, 78, 59, 78, 34, 26, 71, 9, 82, 68, 80, 74, 100, 6, 10, 53, 84, 80, 7, 87, 3, 82, 26, 26, 14, 37, 26, 58, 96, 73, 41, 2, 79, 43, 56, 74, 30, 71, 6, 100, 72, 93, 83, 40, 28, 79, 24]))