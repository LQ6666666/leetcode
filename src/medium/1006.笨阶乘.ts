function clumsy(n: number): number {
  const stack: number[] = [n--];

  let i = 0;
  while (n > 0) {
    if (i % 4 === 0) {
      stack.push(stack.pop()! * n);
    } else if (i % 4 === 1) {
      const num = stack.pop()!;
      stack.push(Math[num > 0 ? "floor" : "ceil"](num / n));
    } else if (i % 4 === 2) {
      stack.push(n);
    } else {
      stack.push(-n);
    }

    i++;
    n--;
  }

  return stack.reduce((acc, num) => acc + num, 0);
}

export { clumsy };
