function minNumberOfHours(
  // 初始精力
  initialEnergy: number,
  // 初始经验
  initialExperience: number,
  energy: number[],
  experience: number[]
): number {
  const sum = energy.reduce((prev, cur) => prev + cur);
  let ans = initialEnergy > sum ? 0 : sum + 1 - initialEnergy;

  for (const e of experience) {
    if (initialExperience <= e) {
      ans += 1 + (e - initialExperience);
      // 击败对手需要 e + 1 的经验，击败后获得对手的经验 e
      initialExperience = 2 * e + 1;
    } else {
      // 击败第 i 个对手会使你的经验 增加 experience[i]
      initialExperience += e;
    }
  }

  return ans;
}

export {};
