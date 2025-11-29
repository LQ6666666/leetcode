function detectCapitalUse(word: string): boolean {
  const n = word.length;

  if (isUpper(word[0])) {
    if (n > 1) {
      if (isUpper(word[1])) {
        for (let i = 2; i < n; i++) {
          if (!isUpper(word[i])) {
            return false;
          }
        }
      } else {
        for (let i = 2; i < n; i++) {
          if (!isLower(word[i])) {
            return false;
          }
        }
      }
    }
  } else {
    for (let i = 1; i < n; i++) {
      if (!isLower(word[i])) {
        return false;
      }
    }
  }

  return true;
}

function isUpper(c: string): boolean {
  const code = c.charCodeAt(0);
  return code >= 65 && code <= 90;
}

function isLower(c: string): boolean {
  const code = c.charCodeAt(0);
  return code >= 97 && code <= 122;
}

export { detectCapitalUse };
