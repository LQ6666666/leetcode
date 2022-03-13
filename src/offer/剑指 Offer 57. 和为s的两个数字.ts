// function twoSum(nums: number[], target: number): number[] {
//     const set = new Set<number>();

//     for (const num of nums) {
//         const value = target - num;

//         if (set.has(value)) {
//             return [value, num];
//         }

//         set.add(num);
//     }

//     return nums;
// };

function twoSum(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        const value = nums[left] + nums[right];

        if (value === target) {
            return [nums[left], nums[right]];
        } else if (value > target) {
            right--;
        } else {
            left++;
        }
    }

    return nums;
};

export { };