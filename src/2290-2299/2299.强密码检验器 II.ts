function strongPasswordCheckerII(password: string): boolean {
  const n = password.length;
  // 它有至少 8 个字符
  if (n < 8) return false;
  // 至少包含一个小写英文字母
  let hasLower = false;
  // 至少包含一个大写英文字母
  let hasUpper = false;
  // 至少包含一个数字
  let hasDigit = false;
  // 至少包含一个特殊字符。特殊字符为："!@#$%^&*()-+" 中的一个
  let hasSpecial = false;
  const specials = new Set("!@#$%^&*()-+");
  // 它不包含 2 个连续相同的字符（比方说"aab"不符合该条件，但是"aba"符合该条件）
  let prev = "";
  for (let i = 0; i < n; i++) {
    const ch = password[i];

    if (prev === ch) return false;
    prev = ch;

    if (isLowerCase(ch)) {
      hasLower = true;
    } else if (isUpperCase(ch)) {
      hasUpper = true;
    } else if (isNumber(ch)) {
      hasDigit = true;
    } else if (specials.has(ch)) {
      hasSpecial = true;
    }
  }

  return hasLower && hasUpper && hasDigit && hasSpecial;
}

const isNumber = (ch: string) => parseFloat(ch).toString() !== "NaN";

const isLowerCase = (ch: string) => "a" <= ch && ch <= "z";

const isUpperCase = (ch: string) => "A" <= ch && ch <= "Z";

export { strongPasswordCheckerII };
