const vowelSet = new Set("aeiouAEIOU");
const consonantSet = new Set<string>();
const numSet = new Set<string>(Array.from({ length: 10 }, (_, i): string => i.toString()));

for (let i = 0; i < 26; i++) {
  if (!vowelSet.has(String.fromCharCode(i + 65))) {
    consonantSet.add(String.fromCharCode(i + 65));
    consonantSet.add(String.fromCharCode(i + 97));
  }
}

function isValid(word: string): boolean {
  if (word.length < 3) return false;

  let hasVowel = false;
  let hasConsonant = false;

  for (const ch of word) {
    if (vowelSet.has(ch)) {
      hasVowel = true;
    } else if (consonantSet.has(ch)) {
      hasConsonant = true;
    } else if (numSet.has(ch)) {
      //
    } else {
      return false;
    }
  }

  return hasVowel && hasConsonant;
}

export { isValid };
