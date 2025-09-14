function spellchecker(wordlist: string[], queries: string[]): string[] {
  // 创建 3 个 集合
  const prefectSet = new Set<string>();
  const capsMap = new Map<string, string>();
  const vowelMap = new Map<string, string>();

  for (let i = 0; i < wordlist.length; i++) {
    const word = wordlist[i];
    prefectSet.add(word);

    const lowWord = word.toLowerCase();
    // 返回单词列表中的第一个这样的匹配项
    if (!capsMap.has(lowWord)) {
      capsMap.set(lowWord, word);
    }

    const dv = devowel(lowWord);
    // 返回单词列表中的第一个这样的匹配项
    if (!vowelMap.has(dv)) {
      vowelMap.set(dv, word);
    }
  }

  return queries.map(solve);

  function solve(query: string): string {
    if (prefectSet.has(query)) return query;

    const lowWord = query.toLowerCase();

    return capsMap.get(lowWord) ?? vowelMap.get(devowel(lowWord)) ?? "";
  }
}

const vowelSet = new Set(["a", "e", "i", "o", "u"]);

function devowel(word: string) {
  let result = "";
  for (const c of word) {
    if (vowelSet.has(c)) {
      result += "*";
    } else {
      result += c;
    }
  }
  return result;
}

export { spellchecker };
