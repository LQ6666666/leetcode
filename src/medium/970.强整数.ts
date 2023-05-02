function powerfulIntegers(x: number, y: number, bound: number): number[] {
  const ans = new Set<number>();
  let a = 1;
  for (let i = 0; i < 21; i++) {
    let b = 1;
    for (let j = 0; j < 21; j++) {
      const value = a + b;
      if (value <= bound) {
        ans.add(value);
      } else {
        break;
      }
      b *= y;
    }

    if (a > bound) {
      break;
    }
    a *= x;
  }
  return Array.from(ans);
}

export {};
