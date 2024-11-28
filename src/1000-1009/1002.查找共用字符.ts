function commonChars(words: string[]): string[] {
  const maps = words.map(word => {
    const map = new Map<number, number>();
    for (const ch of word) {
      const code = ch.charCodeAt(0) - 97;
      map.set(code, (map.get(code) ?? 0) + 1);
    }
    return map;
  });

  const ans: string[] = [];
  for (let i = 0; i < 26; i++) {
    let count = 0;
    while (maps.every(map => (map.get(i) ?? 0) > count)) {
      count++;
    }
    for (let j = 0; j < count; j++) {
      ans.push(String.fromCharCode(i + 97));
    }
  }

  return ans;
}

export { commonChars };
