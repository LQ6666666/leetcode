function decodeMessage(key: string, message: string): string {
  const map = new Map<string, string>();

  let index = 0;
  for (const ch of key) {
    if (ch === " " || map.has(ch)) continue;

    map.set(ch, String.fromCharCode(97 + index++));
  }

  let ans = "";
  for (const ch of message) {
    if (ch === " ") {
      ans += " ";
    } else {
      ans += map.get(ch);
    }
  }

  return ans;
}

export { decodeMessage };
