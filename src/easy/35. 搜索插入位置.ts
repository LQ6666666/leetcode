function searchInsert1(nums: number[], target: number): number {
    const result = nums.indexOf(target)
    if (result === -1) {
        nums.push(target);
        nums.sort((a, b) => a - b);
        return searchInsert1(nums, target);
    } else {
        return result;
    }
};

function searchInsert2(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }

    return nums.length;
};

function searchInsert(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};


const arr = Array.from({ length: 1000000 }, (_, i) => i);

console.time();
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert(arr, 10000));
console.timeEnd();


console.time();
console.log(searchInsert2([1, 3, 5, 6], 7));
console.log(searchInsert2(arr, 10000));
console.timeEnd();


console.time();
console.log(searchInsert1([1, 3, 5, 6], 7));
console.log(searchInsert1(arr, 10000));
console.timeEnd();


export {
    searchInsert
}