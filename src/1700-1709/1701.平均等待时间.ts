function averageWaitingTime(customers: number[][]): number {
  const n = customers.length;

  let currentTime = 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    const [arrival, time] = customers[i];
    currentTime = Math.max(currentTime, arrival) + time;
    total += currentTime - arrival;
  }

  return total / n;
}

export { averageWaitingTime };
