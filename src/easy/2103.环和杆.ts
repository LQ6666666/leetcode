const enum ColorEnum {
  R = "R",
  G = "G",
  B = "B"
}

const ColorValue = {
  [ColorEnum.R]: 0b1,
  [ColorEnum.G]: 0b10,
  [ColorEnum.B]: 0b100
};

function countPoints(rings: string): number {
  const n = rings.length;

  const arr = new Array<number>(10).fill(0);

  for (let i = 0; i < n; i += 2) {
    const color = rings[i] as ColorEnum;
    const position = +rings[i + 1];
    arr[position] |= ColorValue[color];
  }

  let ans = 0;
  for (let i = 0; i < 10; i++) {
    if ((arr[i] & 0b111) === 0b111) {
      ans++;
    }
  }

  return ans;
}

export { countPoints };
