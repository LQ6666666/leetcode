function replaceWords(dictionary: string[], sentence: string): string {
  const words = sentence.split(" ");
  const n = dictionary.length;
  dictionary.sort((a, b) => a.length - b.length);

  return words
    .map(word => {
      for (let i = 0; i < n; i++) {
        const s = dictionary[i];
        if (word.startsWith(s)) {
          return s;
        }
      }
      return word;
    })
    .join(" ");
}

export { replaceWords };
