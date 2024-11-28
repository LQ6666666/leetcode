function kLengthApart(nums: number[], k: number): boolean {
    let count = k;

    for (const item of nums) {
        if (item === 1) {
            if (count < k) {
                return false;
            } else {
                count = 0;
            }
        } else {
            count++;
        }
    }

    return true;
};