function triangleNumber1(nums: number[]): number {
    let ans = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] > nums[k]) {
                    ans++;
                }
            }
        }
    }

    return ans;
};

function triangleNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let ans = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const target = nums[i] + nums[j];

            let left = j + 1, right = n - 1;
            while (left <= right) {
                const mid = left + ((right - left) >> 1);

                if (nums[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            ans += left - j - 1;
        }
    }

    return ans;
};

export { };