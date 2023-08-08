function finalString(s: string): string {
  const ans: string[] = [];
  for (const ch of s) {
    if (ch === "i") {
      ans.reverse();
    } else {
      ans.push(ch);
    }
  }
  return ans.join("");
}

export {};
