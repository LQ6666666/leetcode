function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let ans: number = 0;

    for (let i = 0, len = startTime.length; i < len; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            ans++;
        }
    }

    return ans;
};