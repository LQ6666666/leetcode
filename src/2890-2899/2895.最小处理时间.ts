function minProcessingTime(processorTime: number[], tasks: number[]): number {
  // 最早空闲的先执行
  processorTime.sort((a, b) => a - b);
  // 花费时间长的先执行
  tasks.sort((a, b) => b - a);

  let ans = 0;
  for (let i = 0; i < processorTime.length; i++) {
    // 4 个一组, 每组最大的在第一个(已经排过序了)
    ans = Math.max(ans, processorTime[i] + tasks[i * 4]);
  }

  return ans;
}

export { minProcessingTime };
