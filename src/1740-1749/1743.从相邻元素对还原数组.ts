function restoreArray(adjacentPairs: number[][]): number[] {
  const n = adjacentPairs.length + 1;
  const map = new Map<number, number[]>();

  for (const [a, b] of adjacentPairs) {
    const aArr = map.get(a) || [];
    aArr.push(b);
    map.set(a, aArr);
    const bArr = map.get(b) || [];
    bArr.push(a);
    map.set(b, bArr);
  }

  const ans = new Array<number>(n);
  // 找到头或者尾
  const keys = Array.from(map.keys());
  for (const key of keys) {
    if (map.get(key)!.length === 1) {
      ans[0] = key;
      break;
    }
  }

  ans[1] = map.get(ans[0])![0];
  for (let i = 2; i < n; i++) {
    const adj = map.get(ans[i - 1])!;
    ans[i] = ans[i - 2] === adj[0] ? adj[1] : adj[0];
  }

  return ans;
}

export { restoreArray };
