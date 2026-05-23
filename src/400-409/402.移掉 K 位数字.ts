function removeKdigits(num: string, k: number): string {
  const n = num.length;
  const stack: number[] = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > +num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(+num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let i = 0;
  while (i < stack.length && stack[i] === 0) {
    i++;
  }

  let ans = "";
  for (; i < stack.length; i++) {
    ans += stack[i];
  }

  return ans === "" ? "0" : ans;
}

export {};
