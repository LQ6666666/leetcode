function stableMountains(height: number[], threshold: number): number[] {
  const n = height.length;
  const ans: number[] = [];

  for (let i = 1; i < n; i++) {
    if (height[i - 1] > threshold) {
      ans.push(i);
    }
  }

  return ans;
}

export { stableMountains };
