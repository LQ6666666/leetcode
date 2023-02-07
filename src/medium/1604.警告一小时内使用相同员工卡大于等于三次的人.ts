function alertNames(keyName: string[], keyTime: string[]): string[] {
  const n = keyName.length;
  const map = new Map<string, number[]>();

  for (let i = 0; i < n; i++) {
    const name = keyName[i];
    const time = keyTime[i];

    let times = map.get(name);
    if (!times) {
      map.set(name, (times = []));
    }
    const hour = +time[0] * 10 + +time[1];
    const minute = +time[3] * 10 + +time[4];
    times.push(hour * 60 + minute);
  }

  const ans: string[] = [];
  map.forEach((times, name) => {
    const n = times.length;
    if (n < 3) return;
    times.sort((a, b) => a - b);

    for (let i = 2; i < n; i++) {
      if (times[i] - times[i - 2] <= 60) {
        ans.push(name);
        break;
      }
    }
  });

  ans.sort((a, b) => a.localeCompare(b));
  return ans;
}

export { alertNames };
