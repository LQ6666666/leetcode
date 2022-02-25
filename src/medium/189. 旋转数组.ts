function rotate(nums: number[], k: number): void {
    const left = nums.reverse().splice(k)
    nums.reverse().push(...left.reverse())
};

let nums1 = [-1, -100, 3, 99];
let nums2 = [1, 2, 3, 4, 5, 6, 7];

rotate(nums1, 2);
rotate(nums2, 3);

console.log(nums1);
console.log(nums2);
