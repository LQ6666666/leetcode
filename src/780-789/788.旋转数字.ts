function rotatedDigits(n: number): number {
  let ans = 0;

  for (let i = 1; i <= n; i++) {
    let flag = false;

    for (const s of i.toString()) {
      if (s === "3" || s === "4" || s === "7") {
        flag = false;
        break;;
      }

      if (s === "2" || s === "5" || s === "6" || s === "9") {
        flag = true;
      }
    }

    if (flag) {
      ans++;
    }
  }


  return ans;
};

function rotatedDigits1(n: number): number {
  const FAIL_CHS = new Set([3, 4, 7]);
  const SUCCESS_CHS = new Set([2, 5, 6, 9]);

  let ans = 0;

  for (let i = 1; i <= n; i++) {
    let flag = false;
    for (const ch of i.toString()) {
      if (FAIL_CHS.has(+ch)) {
        flag = false;
        break;
      }

      if (SUCCESS_CHS.has(+ch)) {
        flag = true;
      }
    }

    if (flag) {
      ans++;
    }
  }

  return ans;
};

export { rotatedDigits };
