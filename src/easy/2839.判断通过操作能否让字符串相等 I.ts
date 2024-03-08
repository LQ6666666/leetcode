function canBeEqual(s1: string, s2: string): boolean {
  return (
    s1 === s2 || swap(s1, 0, 2) === s2 || swap(s1, 1, 3) === s2 || swap(swap(s1, 0, 2), 1, 3) === s2
  );
}

function swap(s: string, i: number, j: number) {
  const arr = s.split("");
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}

export { canBeEqual };
