function findLatestTime(s: string): string {
  const result = s.split("");

  if (s[0] === "?") {
    if (s[1] === "?") {
      result[0] = "1";
    } else {
      if (+s[1] > 1) {
        result[0] = "0";
      } else {
        result[0] = "1";
      }
    }
  }

  if (s[1] === "?") {
    if (result[0] === "1") {
      result[1] = "1";
    } else {
      result[1] = "9";
    }
  }

  if (s[3] === "?") {
    result[3] = "5";
  }

  if (s[4] === "?") {
    result[4] = "9";
  }

  return result.join("");
}

export { findLatestTime };
