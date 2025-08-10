const countDigits = (n: number) => {
  const count = new Array<number>(10).fill(0);
  while (n) {
    count[n % 10]++;
    n = Math.floor(n / 10);
  }
  return count.join("");
};

const set = new Set<string>();

for (let n = 1; n <= 1e9; n <<= 1) {
  set.add(countDigits(n));
}

function reorderedPowerOf2(n: number): boolean {
  return set.has(countDigits(n));
}

export { reorderedPowerOf2 };
