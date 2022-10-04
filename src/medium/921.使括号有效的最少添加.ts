function minAddToMakeValid1(s: string): number {
  let ans = 0;
  const stack: string[] = [];

  const LEFT_PARENTHESES = "(";
  const RIGHT_PARENTHESES = ")";

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === LEFT_PARENTHESES) {
      stack.push(LEFT_PARENTHESES);
    } else if (s[i] === RIGHT_PARENTHESES) {
      if (stack.pop() !== LEFT_PARENTHESES) {
        ans++;
      }
    }
  }

  return ans + stack.length;
};

function minAddToMakeValid(s: string): number {
  let ans = 0;
  let leftCount = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] === "(") {
      leftCount++
    } else {
      if (leftCount > 0) {
        leftCount--;
      } else {
        ans++;
      }
    }
  }

  return ans + leftCount;
};

export { minAddToMakeValid };
