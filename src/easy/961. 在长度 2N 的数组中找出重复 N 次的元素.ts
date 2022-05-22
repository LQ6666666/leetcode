function repeatedNTimes(nums: number[]): number {
    const set = new Set<number>();

    for (const num of nums) {
        if (set.has(num)) {
            return num;
        }

        set.add(num);
    }

    return -1;
};


export { };