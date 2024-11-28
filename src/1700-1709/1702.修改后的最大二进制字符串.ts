function maximumBinaryString(binary: string): string {
  const n = binary.length;
  const s = binary.split("");

  let j = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "0") {
      while (j <= i || (j < n && s[j] === "1")) {
        j++;
      }

      if (j < n) {
        s[j] = "1";
        s[i] = "1";
        s[i + 1] = "0";
      }
    }
  }

  return s.join("");
}

export { maximumBinaryString };
