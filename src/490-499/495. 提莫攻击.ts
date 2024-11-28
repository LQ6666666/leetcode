function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let ans = 0;

    for (let i = 0, len = timeSeries.length - 1; i < len; i++) {
        const t = timeSeries[i + 1] - timeSeries[i];

        if (t > duration) {
            ans = duration + ans;
        } else {
            ans = ans + t;
        }
    }

    return ans + duration;
};