function rand7(): number {
  return Math.random() * 7 + 1;
}

function rand10(): number {
  let row: number;
  let col: number;
  let idx: number;
  do {
    row = rand7();
    col = rand7();
    idx = col + (row - 1) * 7;
  } while (idx > 40);

  return 1 + ((idx - 1) % 10);
}
