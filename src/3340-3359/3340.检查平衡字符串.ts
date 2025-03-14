function isBalanced(num: string): boolean {
  const n = num.length;

  let even = 0;
  let odd = 0;

  for (let i = 0; i < n; i++) {
    const x = +num[i];
    if (i % 2 === 0) {
      even += x;
    } else {
      odd += x;
    }
  }

  return even === odd;
}

export { isBalanced };
