// 给定的字符串 expression 是有效的布尔表达式，每个运算符后面都有一对括号，括号中有一个或多个表达式
// 其中，逻辑非运算符后面的括号中有一个表达式，逻辑与运算符和逻辑或运算符后面的括号中有两个或以上表达式
function parseBoolExpr(expression: string): boolean {
  // // 可以使用栈实现布尔表达式的解析。从左到右遍历布尔表达式，对于每种类型的字符，执行相应的操作
  const stack: string[] = [];

  for (const ch of expression) {
    // 如果当前字符是逗号，则跳过该字符；
    // 如果当前字符是除了逗号和右括号以外的任意字符，则将该字符添加到栈内
    if (ch !== "," && ch !== ")") {
      stack.push(ch);
    } else if (ch === ")") {
      // 如果当前字符是右括号，则一个表达式遍历结束，需要解析该表达式的值，并将结果添加到栈内：
      // 将栈内字符依次弹出，直到栈顶字符是左括号，然后将左括号和运算符从栈内弹出，记录弹出的 t 和 f 的个数
      let t = 0;
      let f = 0;

      let cur = stack.pop();
      while (cur !== "(") {
        if (cur === "t") {
          t++;
        } else {
          f++;
        }
        cur = stack.pop();
      }

      const op = stack.pop() as Operator;
      // 根据运算符以及 t 和 f 的个数计算表达式的值，并将表达式的值添加到栈内
      const result = calc(t, f, op);
      stack.push(result);
    }
  }

  // 遍历结束之后，栈内只有一个字符，该字符为 t 或 f，如果字符为 t 则返回 true，如果字符为 f 则返回 false
  return stack.pop() === "t";
}

type Operator = "|" | "&" | "!";
function calc(t: number, f: number, op: Operator): string {
  let result = "t";
  if (op === "!") {
    // 如果运算符是 !，则是逻辑非运算符，表达式的值为括号内的值取反
    // 因此当 f 的个数等于 11 时表达式的值为 t，否则表达式的值为 f
    result = t > 0 ? "f" : "t";
  } else if (op === "&") {
    // 如果运算符是 &，则是逻辑与运算符，当括号内的所有值都是 t 时结果是 t，否则结果是 f，
    // 因此当 f 的个数等于 00 时表达式的值为 t'，否则表达式的值为 f
    result = f > 0 ? "f" : "t";
  } else {
    // 如果运算符是 |，则是逻辑或运算符，当括号内至少有一个值都是 t  时结果是 t，否则结果是 f，
    // 因此当 t 的个数大于 0 时表达式的值为 t，否则表达式的值为 f；
    result = t > 0 ? "t" : "f";
  }
  return result;
}

export { parseBoolExpr };
