function peopleIndexes(favoriteCompanies: string[][]): number[] {
  const n = favoriteCompanies.length;
  const favoriteCompaniesSet = favoriteCompanies.map(f => new Set(f));
  const ans: number[] = [];

  for (let i = 0; i < n; i++) {
    if (!helper(i)) {
      ans.push(i);
    }
  }

  return ans;

  function helper(index: number): boolean {
    const f = favoriteCompanies[index];

    for (let i = 0; i < n; i++) {
      if (index === i) continue;

      const set = favoriteCompaniesSet[i];

      let j = 0;
      for (; j < f.length; j++) {
        if (!set.has(f[j])) {
          break;
        }
      }

      if (j === f.length) {
        return true;
      }
    }

    return false;
  }
}

export { peopleIndexes };
