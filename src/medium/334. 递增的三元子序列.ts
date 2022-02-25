function increasingTriplet(nums: number[]): boolean {
    let a: number = Infinity, b: number = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];

        if (n <= a) {
            a = n;
        } else if (n <= b) {
            b = n;
        } else {
            return true;
        }

    }

    return false;
};


console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
