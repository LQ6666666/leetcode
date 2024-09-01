export {};

/*
function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
    let ans: number = 0;

    for (let i = 0, len = startTime.length; i < len; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            ans++;
        }
    }

    return ans;
};
*/

function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  // 找到在开始和结束之前
  return startTime.reduce((ans, cur, idx) => {
    if (cur <= queryTime && endTime[idx] >= queryTime) {
      ans++;
    }
    return ans;
  }, 0);
}
