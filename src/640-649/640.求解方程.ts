function solveEquation(equation: string): string {
  const [left, right] = equation.split("=");

  const [leftX, leftN] = helper(left);
  const [rightX, rightN] = helper(right);

  const x = leftX - rightX;
  const num = leftN - rightN;
  if (x === 0) {
    return num === 0 ? "Infinite solutions" : "No solution";
  } else {
    return `x=${num / -x}`;
  }
}

function helper(str: string): [xCount: number, nCount: number] {
  // 首位补上运算符
  str = str[0] === "-" ? str : "+" + str;

  let xCount = 0;
  let nCount = 0;

  const n = str.length;
  for (let i = 0; i < n; i++) {
    const char = str[i];
    if (char === "+" || char === "-") {
      let j = i;
      while (j < n - 1 && !(str[j + 1] === "+" || str[j + 1] === "-")) {
        j++;
      }

      // 获取修饰值
      // 如果为 x 的修饰
      if (str[j] === "x") {
        const val = i + 1 === j ? 1 : +str.slice(i + 1, j);
        xCount += char === "+" ? val : -val;
      } else {
        const val = +str.slice(i + 1, j + 1);
        nCount += char === "+" ? val : -val;
      }
    }
  }

  return [xCount, nCount];
}

export { solveEquation };
