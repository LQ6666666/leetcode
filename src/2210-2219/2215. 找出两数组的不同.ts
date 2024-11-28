function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    for (const num of nums2) {
        set1.delete(num);
    }

    for (const num of nums1) {
        set2.delete(num);
    }

    return [Array.from(set1), Array.from(set2)];
};


export { };