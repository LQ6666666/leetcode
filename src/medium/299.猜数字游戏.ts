function getHint(secret: string, guess: string): string {
  const n = secret.length;

  let bulls = 0;

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < n; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      map1.set(secret[i], (map1.get(secret[i]) ?? 0) + 1);
      map2.set(guess[i], (map2.get(guess[i]) ?? 0) + 1);
    }
  }

  let cows = 0;
  map1.forEach((value, key) => {
    const count = map2.get(key) ?? 0;
    cows += Math.min(value, count);
  });

  return `${bulls}A${cows}B`;
}

export {};
