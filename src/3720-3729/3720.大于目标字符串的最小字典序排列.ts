function lexGreaterPermutation(s: string, target: string): string {
  const n = s.length;
  const cnt = new Array<number>(26).fill(0);
  for (let i = 0; i < n; i++) {
    cnt[s.charCodeAt(i) - 97]++;
  }

  let ans = "";
  for (let i = 0; i < n; i++) {
    const targetChar = target.charCodeAt(i) - 97;
    if (cnt[targetChar] > 0) {
      cnt[targetChar]--;
      if (canFormGreater(i + 1)) {
        ans += target[i];
        continue;
      }
      // 不能构成更大的字符串，回溯
      cnt[targetChar]++;
    }

    for (let j = targetChar + 1; j < 26; j++) {
      if (cnt[j] > 0) {
        cnt[j]--;
        ans += String.fromCharCode(97 + j);
        // 剩余位置按最小字典序填充
        ans += getMinString();
        return ans;
      }
    }

    return "";
  }

  return "";

  // 检查剩余字符是否能构成大于 suffix 的字符串
  function canFormGreater(startIndex: number): boolean {
    const maxStr: string = getMaxString();
    const suffix: string = target.slice(startIndex);
    return maxStr > suffix;
  }

  // 获取最大字典序字符串（降序排列）
  function getMaxString(): string {
    let res: string = "";
    for (let i = 25; i >= 0; i--) {
      res += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return res;
  }

  function getMinString(): string {
    let res: string = "";
    for (let i = 0; i < 26; i++) {
      res += String.fromCharCode(97 + i).repeat(cnt[i]);
    }
    return res;
  }
}

export {};
