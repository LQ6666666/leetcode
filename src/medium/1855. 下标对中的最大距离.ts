function maxDistance(nums1: number[], nums2: number[]): number {
    const l1 = nums1.length;
    const l2 = nums2.length;

    let i = 0, ans = 0;
    // 遍历 nums2
    for (let j = 0; j < l2; j++) {
        while (i < l1 && nums1[i] > nums2[j]) {
            i++;
        }

        if (i < l1) {
            ans = Math.max(ans, j - i);
        }
    }

    return ans;
};