const signSet = new Set(["+", "-", "*", "/"]);

function calculate(s: string): number {
  const n = s.length;
  const stack: number[] = [];
  let preSign = "+";

  let i = 0;
  while (i < n) {
    if (s[i] === " ") {
      i++;
      continue;
    }

    if (signSet.has(s[i])) {
      preSign = s[i++];
    } else {
      let num = 0;
      let j = i;
      while (j < n && s[j] !== " " && !signSet.has(s[j])) {
        num = num * 10 + +s[j++];
      }

      if (preSign === "*") {
        stack.push(stack.pop()! * num);
      } else if (preSign === "/") {
        const val = stack.pop()! / num;
        stack.push(val > 0 ? Math.floor(val) : Math.ceil(val));
      } else if (preSign === "-") {
        stack.push(-num);
      } else {
        stack.push(num);
      }

      i = j;
    }
  }

  return stack.reduce((acc, num) => acc + num, 0);
}

export {};
