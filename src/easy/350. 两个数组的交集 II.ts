function intersect(nums1: number[], nums2: number[]): number[] {
    Array.prototype.forEach.call(arguments, (nums: number[]) => nums.sort((a, b) => a - b));

    const ans: number[] = [];
    const l1 = nums1.length, l2 = nums2.length;

    let n1 = 0, n2 = 0;
    while (n1 < l1 && n2 < l2) {
        if (nums1[n1] > nums2[n2]) {
            n2++;
        } else if (nums1[n1] < nums2[n2]) {
            n1++;
        } else {
            ans.push(nums1[n1]);
            n1++;
            n2++;
        }
    }

    return ans;
};