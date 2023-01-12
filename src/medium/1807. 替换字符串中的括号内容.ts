function evaluate1(s: string, knowledge: string[][]): string {
  let ans = "";
  const map = new Map<string, string>();
  for (const item of knowledge) {
    map.set(item[0], item[1]);
  }

  let temp = "",
    flag = false;
  for (const char of s) {
    if (char === "(") {
      flag = true;
    } else if (char === ")") {
      flag = false;
      if (map.has(temp)) {
        ans += map.get(temp);
      } else {
        ans += "?";
      }

      temp = "";
    } else if (flag) {
      temp += char;
    } else {
      ans += char;
    }
  }

  return ans;
}

function evaluate(s: string, knowledge: string[][]): string {
  const map = new Map<string, string>();
  for (const [key, value] of knowledge) {
    map.set(key, value);
  }

  let ans = "";
  const n = s.length;
  let i = 0;    

  while (i < n) {
    let ch = s[i++];

    if (ch === "(") {
      let key = "";
      ch = s[i];
      while (ch !== ")") {
        key += ch;
        ch = s[++i];
      }

      const value = map.get(key) ?? "?";
      ans += value;
      i++;
    } else {
      ans += ch;
    }
  }

  return ans;
}

export { evaluate };
