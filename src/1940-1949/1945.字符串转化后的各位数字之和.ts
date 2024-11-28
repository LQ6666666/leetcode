function getLucky(s: string, k: number): number {
  let ans = 0;

  let str = "";
  for (const ch of s) {
    str += ch.charCodeAt(0) - 96;
  }

  while (k > 0) {
    let sum = 0;
    for (const ch of str) {
      sum += +ch;
    }

    ans = sum;
    str = String(ans);

    if (str.length === 1) {
      break;
    }

    k--;
  }

  return ans;
}

console.log(getLucky("iiii", 1));

// export {};
