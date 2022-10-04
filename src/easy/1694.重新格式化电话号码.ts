function reformatNumber(num: string): string {
  let n = num.length;
  const RE_NUMBER = /^[0-9]$/;

  // 1.去除其他字符
  let temp = "";
  for (let i = 0; i < n; i++) {
    if (RE_NUMBER.test(num[i])) {
      temp += num[i];
    }
  }

  n = temp.length;

  // 每 3 个一组
  let ans = "", pos = 0;
  while (pos < n - 4) {
    ans += temp.slice(pos, pos + 3) + "-";
    pos += 3;
  }

  // 剩下的长度
  const restLen = n - pos;
  if (restLen === 4) {
    ans += temp.slice(-4, -2) + "-" + temp.slice(-2);
  } else {
    ans += temp.slice(-restLen);
  }

  return ans;
};

export { reformatNumber };
