function categorizeBox(
  length: number,
  width: number,
  height: number,
  mass: number
): "Bulky" | "Heavy" | "Both" | "Neither" {
  //

  const bulky =
    length >= 10000 || width >= 10000 || height >= 1000 || length * width * height >= 1e9;
  const heavy = mass >= 100;

  // 如果箱子同时是 "Bulky" 和 "Heavy" ，那么返回类别为 "Both"
  if (bulky && heavy) {
    return "Both";
  }
  // 如果箱子既不是 "Bulky" ，也不是 "Heavy" ，那么返回类别为 "Neither"
  if (!bulky && !heavy) {
    return "Neither";
  }
  // 如果箱子是 "Bulky" 但不是 "Heavy" ，那么返回类别为 "Bulky" 。
  if (bulky && !heavy) {
    return "Bulky";
  }
  // 如果箱子是 "Heavy" 但不是 "Bulky" ，那么返回类别为 "Heavy" 。
  if (heavy && !bulky) {
    return "Heavy";
  }

  throw new Error("unknown error");
}

export { categorizeBox };
