function detectCapitalUse$(word: string): boolean {
  const upperCaseReg: RegExp = /^[A-Z]+$/;
  const lowerCaseReg: RegExp = /^[a-z]+$/;

  // 全部是大写字母
  if (upperCaseReg.test(word)) {
    return true;
  }

  // 全部是小写字母
  if (lowerCaseReg.test(word)) {
    return true;
  }

  // 首字母是大写字母，其他都是小写字母
  if (/^[A-Z]$/.test(word[0])) {
    return lowerCaseReg.test(word.substr(1));
  } else {
    return false;
  }
}

function detectCapitalUse(word: string): boolean {
  const n = word.length;

  let flag = true;
  for (let i = 1; i < n && flag === true; i++) {
    if (
      (word[0].charCodeAt(0) < "a".charCodeAt(0) && word[i].charCodeAt(0) < "a".charCodeAt(0)) ||
      (word[0].charCodeAt(0) >= "a".charCodeAt(0) && word[i].charCodeAt(0) >= "a".charCodeAt(0))
    ) {
      continue;
    }
    flag = false;
  }

  if (flag) return true;

  if (word[0].charCodeAt(0) < "a".charCodeAt(0)) {
    for (let i = 1; i < n; i++) {
      if (word[i].charCodeAt(0) < "a".charCodeAt(0)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

export { detectCapitalUse };
