function intersection(nums1: number[], nums2: number[]): number[] {
    function calcIntersection<T extends Set<number>>(set1: T, set2: T): number[] {
        if (set1.size < set2.size) {
            return calcIntersection(set2, set1);
        }

        const ret = new Set<number>();

        set1.forEach(value => {
            if (set2.has(value)) {
                ret.add(value);
            }
        });

        return Array.from(ret);
    }

    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return calcIntersection(set1, set2);
};