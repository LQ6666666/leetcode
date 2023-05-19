function countTime(time: string): number {
  let ans = 0;
  const arr = time.split("");
  const n = arr.length;
  return dfs(0), ans;

  function dfs(pos: number) {
    if (pos === n) {
      if (check()) ans++;
      return;
    }

    if (arr[pos] === "?") {
      for (let i = 0; i < 10; i++) {
        arr[pos] = i.toString();
        dfs(pos + 1);
        arr[pos] = "?";
      }
    } else {
      dfs(pos + 1);
    }

    return;
  }

  function check(): boolean {
    const hh = +arr[0] * 10 + +arr[1];
    const mm = +arr[3] * 10 + +arr[4];
    return hh < 24 && mm < 60;
  }
}

export {};
