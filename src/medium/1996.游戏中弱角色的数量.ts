function numberOfWeakCharacters(properties: number[][]): number {
  // 按攻击力降序排列，同攻击按防御降序
  properties.sort((o1, o2) => (o1[0] === o2[0] ? o1[1] - o2[1] : o2[0] - o1[0]));
  const n = properties.length;
  let ans = 0;
  let max = -1;
  // 只要前面有比它防御力高的，则是弱角色
  for (let i = 0; i < n; i++) {
    const d = properties[i][1];
    if (max > d) {
      ans++;
    }
    max = Math.max(max, d);
  }

  return ans;
}

export { numberOfWeakCharacters };
