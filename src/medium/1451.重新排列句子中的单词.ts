function arrangeWords(text: string): string {
  const words = text.split(" ");
  words[0] = words[0].slice(0, 1).toLowerCase() + words[0].slice(1);

  const map = new Map<number, string[]>();

  for (const word of words) {
    let group = map.get(word.length);
    if (!group) {
      map.set(word.length, (group = []));
    }
    group.push(word);
  }

  const keys = Array.from(map.keys()).sort((a, b) => a - b);

  let firstWord = map.get(keys[0])![0];
  firstWord = firstWord.slice(0, 1).toUpperCase() + firstWord.slice(1);
  map.get(keys[0])![0] = firstWord;

  const result: string[] = [];
  for (const key of keys) {
    const group = map.get(key)!;
    result.push(...group);
  }

  return result.join(" ");
}

export { arrangeWords };
