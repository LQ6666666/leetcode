function interpret(command: string): string {
  const n = command.length;
  let i = 0;
  let ans = "";
  while (i < n) {
    let ch = command[i++];

    if (ch !== "(") {
      ans += ch;
      continue;
    }

    // 下一个
    ch = command[i];
    let temp = "(";
    while (ch !== ")") {
      temp += ch;
      ch = command[++i];
    }
    temp += command[i++];
    if (temp === "()") {
      ans += "o";
    } else {
      ans += "al";
    }
  }

  return ans;
}

export {};
