function twoEditWords(queries: string[], dictionary: string[]): string[] {
  const ans: string[] = [];
  for (const q of queries) {
    const n = q.length;
    for (const d of dictionary) {
      let count = 0;
      for (let i = 0; i < n; i++) {
        if (q[i] !== d[i]) {
          count++;
        }
        if (count > 2) {
          break;
        }
      }
      if (count <= 2) {
        ans.push(q);
        break;
      }
    }
  }
  return ans;
}

export { twoEditWords };
