function breakPalindrome(palindrome: string): string {
  const n = palindrome.length;

  if (n === 1) return "";

  const isOdd = n % 2 !== 0;
  let index = -1;

  for (let i = 0; i < n; i++) {
    if (palindrome[i] !== "a" && !(isOdd && Math.floor(n / 2) === i)) {
      index = i;
      break;
    }
  }

  const arr = palindrome.split("");

  if (index === -1) {
    arr[n - 1] = "b";
  } else {
    arr[index] = "a";
  }

  return arr.join("");
}

// 从前往后遍历，将第一个不为a的字符替换为 a 即可
// 注意，长度为1的串无法破坏
// 注意，奇数串替换最中心字符无效
// 注意，如果遍历到最后一个字符仍未替换，那么即使最后一个字符是a也必须替换，将其替换为b
