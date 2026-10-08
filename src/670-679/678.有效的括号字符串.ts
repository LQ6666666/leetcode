function checkValidString(s: string): boolean {
  const n = s.length;
  // 未匹配的左括号的个数的最小值和最大值
  let mn = 0;
  let mx = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      mn++;
      mx++;
    } else if (s[i] === ")") {
      mn--;
      mx--;
      if (mx < 0) {
        return false;
      }
    } else {
      // * 改成右括号
      mn--;
      // * 改成左括号
      mx++;
    }

    mn = Math.max(mn, 0);
  }

  return mn === 0;
}

export {};
