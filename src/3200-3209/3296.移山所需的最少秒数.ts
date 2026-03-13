const EPS = 1e-7;

function minNumberOfSeconds(mountainHeight: number, workerTimes: number[]): number {
  const maxWorkerTimes = Math.max(...workerTimes);
  let left = 1;
  let right = Math.floor((maxWorkerTimes * mountainHeight * (mountainHeight + 1)) / 2);
  let ans = 0;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    let count = 0;
    for (const t of workerTimes) {
      const work = Math.floor(middle / t);
      // 求最大的 k 满足 1+2+...+k <= work
      const k = Math.floor((-1.0 + Math.sqrt(1 + work * 8)) / 2 + EPS);
      count += k;
    }

    if (count < mountainHeight) {
      left = middle + 1;
    } else {
      ans = middle;
      right = middle - 1;
    }
  }

  return ans;
}

export {};
