function maxArea(height: number[]): number {
    const len = height.length;
    if (len < 2) return 0;

    let ans = 0;
    let left = 0, right = len - 1;

    while (left < right) {
        const h = Math.min(height[left], height[right]);
        const area = h * (right - left);
        ans = Math.max(area, ans);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return ans;
};


export { };