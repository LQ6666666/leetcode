function maximumTime(time: string): string {
  const arr = time.split("");

  if (arr[0] === "?") {
    if (arr[1] === "?") {
      arr[0] = "2";
      arr[1] = "3";
    } else if (+arr[1] <= 3) {
      arr[0] = "2";
    } else {
      arr[0] = "1";
    }
  } else if (arr[1] === "?") {
    if (+arr[0] === 2) {
      arr[1] = "3";
    } else {
      arr[1] = "9";
    }
  } else if (arr[4] === "?") {
    if (arr[3] === "?") {
      arr[3] = "5";
      arr[4] = "9";
    } else {
      arr[4] = "9";
    }
  } else if (arr[3] === "?") {
    arr[3] = "5";
  } else {
    return time;
  }

  return maximumTime(arr.join(""));
}

export { maximumTime };
