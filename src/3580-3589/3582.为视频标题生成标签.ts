function generateTag(caption: string): string {
  const words = caption.split(" ").filter(Boolean);

  if (words.length) {
    words[0] = words[0].toLowerCase();
  }

  for (let i = 1; i < words.length; i++) {
    let [first, ...rest] = words[i];
    words[i] = first.toUpperCase() + rest.join("").toLowerCase();
  }

  return ("#" + words.join("")).slice(0, 100);
}

export {};
