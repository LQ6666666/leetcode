function minSpeedOnTime(dist: number[], hour: number): number {
  let ans = -1;
  let left = 1,
    right = 1e7;

  while (left <= right) {
    const speed = Math.floor((right + left) / 2);
    const cost = sum(
      dist.map((t, index) => (index === dist.length - 1 ? t / speed : Math.ceil(t / speed)))
    );
    if (cost <= hour) {
      ans = speed;
      right = speed - 1;
    } else {
      left = speed + 1;
    }
  }

  return ans;
}

const sum = (arr: number[]): number => arr.reduce((acc, num) => acc + num, 0);

export { minSpeedOnTime };
