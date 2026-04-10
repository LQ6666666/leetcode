function fraction(cont: number[]): number[] {
  let x = 1;
  let y = 0;
  for (let i = cont.length - 1; i >= 0; i--) {
    const t = x;
    x = y;
    y = t;
    x += y * cont[i];
  }
  return [x, y];
}

export {};
