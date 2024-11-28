function numberOfAlternatingGroups(colors: number[]): number {
  const n = colors.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    const color = colors[i];
    if (color === colors[(i + 2) % n] && color !== colors[(i + 1) % n]) {
      ans++;
    }
  }
  return ans;
}

export { numberOfAlternatingGroups };
