function convertDateToBinary(date: string): string {
  const year = +date.slice(0, 4);
  const month = +date.slice(5, 7);
  const day = +date.slice(8, 10);
  return `${toBinary(year)}-${toBinary(month)}-${toBinary(day)}`;
}

function toBinary(num: number): string {
  let result = "";
  while (num > 0) {
    result = ((num & 1) === 1 ? "1" : "0") + result;
    num >>= 1;
  }

  return result;
}

export { convertDateToBinary };
