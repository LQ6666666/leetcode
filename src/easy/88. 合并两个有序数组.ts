// 额外数组
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (n === 0) return;
    const len = m + n;
    const sorted = new Array(len);

    let n1 = 0, n2 = 0;
    let i = 0;

    while (i < len) {
        const num1 = n1 < m ? nums1[n1] : Infinity;
        const num2 = n2 < n ? nums2[n2] : Infinity;

        if (num1 <= num2) {
            sorted[i] = nums1[n1++];
        } else {
            sorted[i] = nums2[n2++];
        }
        i++;
    }

    i = 0;
    for (; i < len; i++) {
        nums1[i] = sorted[i];
    }
};

export { };