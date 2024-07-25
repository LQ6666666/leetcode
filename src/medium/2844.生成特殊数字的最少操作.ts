function minimumOperations(num: string): number {
  const n = num.length;
  let found0 = false,
    found5 = false;

  for (let i = n - 1; i >= 0; i--) {
    const c = num[i];
    if ((found0 && (c === "0" || c === "5")) || (found5 && (c === "2" || c === "7"))) {
      return n - i - 2;
    }

    if (c === "0") {
      found0 = true;
    } else if (c === "5") {
      found5 = true;
    }
  }

  return found0 ? n - 1 : n;
}

export { minimumOperations };
