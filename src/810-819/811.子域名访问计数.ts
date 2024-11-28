function subdomainVisits(cpdomains: string[]): string[] {
  const map = new Map<string, number>();

  for (const cpdomain of cpdomains) {
    const [count, d1, d2, d3] = analysis(cpdomain);
    map.set(d1, (map.get(d1) ?? 0) + count);
    map.set(d2, (map.get(d2) ?? 0) + count);
    if (d3) {
      map.set(d3, (map.get(d3) ?? 0) + count);
    }
  }

  const ans: string[] = [];

  map.forEach((value, key) => {
    ans.push(`${value} ${key}`);
  });

  return ans;
};

function analysis(s: string) {
  const index = s.indexOf(" ");
  const count = +s.slice(0, index);

  const d1 = s.slice(index + 1);
  const result = d1.split(".");

  const d3 = result[2] as string | undefined;
  const d2 = result[1] + (d3 ? `.${d3}` : "");

  return [count, d1, d2, d3] as [number, string, string, string?];
}

export { subdomainVisits };
