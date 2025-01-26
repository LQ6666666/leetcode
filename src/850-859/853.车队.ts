function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;
  // 记录每个位置到达终点所需的时间
  const time = new Array<number>(target);
  for (let i = 0; i < n; i++) {
    time[position[i]] = (target - position[i]) / speed[i];
  }

  // 记录到每个车队上最慢到达终点的所需时间是多少
  const stack: number[] = [];
  for (let i = 0; i < target; i++) {
    if (time[i] > 0) {
      // 如果追上之后就会按照车队中速度最慢的那个速度继续前行
      while (stack.length > 0 && time[i] >= stack[stack.length - 1]) {
        stack.pop();
      }

      stack.push(time[i]);
    }
  }

  return stack.length;
}

export { carFleet };
