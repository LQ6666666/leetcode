function numSteps(s: string): number {
  let ans = 0;
  while (s !== "1") {
    ans++;

    let arr: string[] = s.split("");

    if (arr.at(-1) === "0") {
      arr = arr.slice(0, -1);
    } else {
      // 最后面是 1 ，模拟进位操作
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === "1") {
          arr[i] = "0";

          // 最前面还是 1 ，增加 1 位
          if (i === 0) {
            arr.unshift("1");
          }
        } else {
          arr[i] = "1";
          break;
        }
      }
    }

    s = arr.join("");
  }

  return ans;
}

export {};
