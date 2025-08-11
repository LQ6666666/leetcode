function constructRectangle(area: number): number[] {
  let l = Math.floor(Math.sqrt(area));
  let w = l;

  while (l * w !== area) {
    if (l * w < area) {
      l++;
    } else {
      w--;
    }
  }

  return [l, w];
}

export { constructRectangle };
