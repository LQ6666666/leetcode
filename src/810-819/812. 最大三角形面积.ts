function largestTriangleArea(points: number[][]): number {
    const n = points.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                ans = Math.max(ans, getArea(points[i], points[j], points[k]));
            }
        }
    }

    return ans;
};

function getArea(P: number[], Q: number[], R: number[],) {
    const area = Math.abs(
        P[0] * Q[1] + Q[0] * R[1] + R[0] * P[1]
        - P[1] * Q[0] - Q[1] * R[0] - R[1] * P[0]
    ) * 0.5;
    return area;
}