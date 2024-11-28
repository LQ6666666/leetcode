function smallestString(s: string): string {
  const n = s.length;
  const ans = s.split("");
  const firstNonA = ans.findIndex(c => c !== "a");
  if (firstNonA === -1) {
    ans[n - 1] = "z";
    return ans.join("");
  }
  let end = ans.indexOf("a", firstNonA);
  if (end === -1) {
    end = n;
  }
  for (let i = firstNonA; i < end; i++) {
    ans[i] = String.fromCharCode(ans[i].charCodeAt(0) - 1);
  }
  return ans.join("");
}

export { smallestString };
