function queryString(s: string, n: number): boolean {
  for (let i = n; i > 0; i--) {
    if (!s.includes(getBinaryString(i))) {
      return false;
    }
  }

  return true;
}

const getBinaryString = (x: number) => {
  let ans = "";
  while (x > 0) {
    ans = (x % 2) + ans;
    x = Math.floor(x / 2);
  }
  return ans;
};


export {};
