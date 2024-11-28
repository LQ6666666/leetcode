function dividePlayers(skill: number[]): number {
  const n = skill.length;
  let ans = 0;
  // 1.排序
  skill.sort((a, b) => a - b);
  // 2.计算目标和
  const target = skill[0] + skill[n - 1];
  // 3.计算和
  for (let i = 0, len = n >> 1; i < len; i++) {
    const start = skill[i];
    const end = skill[n - i - 1];

    if (start + end === target) {
      ans += start * end;
    } else {
      return -1;
    }
  }

  return ans;
}

export { dividePlayers };
