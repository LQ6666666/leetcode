function numDifferentIntegers1(word: string): number {
  word += "a";
  let str = "";
  const set = new Set<string>();
  const re = /[0-9]/;

  for (const ch of word) {
    if (re.test(ch)) {
      str += ch;
    } else if (str !== "") {
      set.add(removeNumStringPrefixZero(str));
      str = "";
    }
  }

  return set.size;

  function removeNumStringPrefixZero(numString: string): string {
    if (numString.charAt(0) === "0") {
      return removeNumStringPrefixZero(numString.slice(1));
    }

    return numString;
  }
}

function numDifferentIntegers(word: string): number {
  word += "a";
  const set = new Set<string>();
  const RE = /[0-9]/;

  let temp = "";
  for (const ch of word) {
    if (RE.test(ch)) {
      temp += ch;
    } else if (temp) {
      // 删除前缀 0
      let i = 0;
      while (temp[i] === "0") i++;
      set.add(temp.slice(i));
      temp = "";
    }
  }

  return set.size;
}

export {};
