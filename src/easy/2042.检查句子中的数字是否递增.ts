function areNumbersAscending1(s: string): boolean {
  s += " ";

  const set = new Set<string>(Array.from({ length: 10 }, (_, i) => i.toString()));

  let prev = Number.MIN_SAFE_INTEGER;
  let strNum = "";

  for (const item of s) {
    if (set.has(item)) {
      strNum += item;
    } else if (strNum !== "") {
      if (+strNum > prev) {
        prev = +strNum;
        strNum = "";
      } else {
        return false;
      }
    }
  }

  return true;
}

function areNumbersAscending(s: string): boolean {
  s += " ";

  const NUMBER_RE = /^[0-9]+$/;
  let prevNumber = -1;
  let temp = "";

  for (const ch of s) {
    if (ch === " ") {
      if (NUMBER_RE.test(temp)) {
        const num = +temp;

        if (num <= prevNumber) return false;

        prevNumber = num;
      }

      temp = "";
    } else {
      temp += ch;
    }
  }

  return true;
}

export { areNumbersAscending };
