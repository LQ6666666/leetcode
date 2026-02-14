function trainingPlan(actions: number[]): number {
  let ones = 0;
  let twos = 0;
  for (const action of actions) {
    ones = ones ^ (action & ~twos);
    twos = twos ^ (action & ~ones);
  }
  return ones;
}

export {};
