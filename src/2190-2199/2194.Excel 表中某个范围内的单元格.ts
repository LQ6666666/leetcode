function cellsInRange(s: string): string[] {
  const [a, b] = s.split(":");

  const ans: string[] = [];
  for (let i = a.charCodeAt(0); i <= b.charCodeAt(0); i++) {
    for (let j = +a[1]; j <= +b[1]; j++) {
      ans.push(String.fromCharCode(i) + j);
    }
  }

  return ans;
}

export { cellsInRange };
