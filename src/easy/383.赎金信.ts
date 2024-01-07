function canConstruct$(ransomNote: string, magazine: string): boolean {
  const magazineArr = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    const index = magazineArr.indexOf(letter);

    if (index === -1) {
      return false;
    } else {
      magazineArr.splice(index, 1);
    }
  }

  return true;
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (const ch of magazine) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  for (const ch of ransomNote) {
    const count = map.get(ch) ?? 0;
    if (count === 0) return false;

    map.set(ch, count - 1);
  }

  return true;
}

export {};
