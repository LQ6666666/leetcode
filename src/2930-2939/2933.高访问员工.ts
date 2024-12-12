function findHighAccessEmployees(access_times: string[][]): string[] {
  const ans: string[] = [];
  const map = new Map<string, string[]>();

  for (const [employee, time] of access_times) {
    let times = map.get(employee);
    if (times === undefined) {
      map.set(employee, (times = []));
    }
    times.push(time);
  }

  const employees = Array.from(map.keys());

  for (const employee of employees) {
    const times = (map.get(employee) || []).map<[number, number]>(item => [
      +item.slice(0, 2),
      +item.slice(2)
    ]);
    const n = times.length;

    times.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });

    for (let i = 1; i < n - 1; i++) {
      const diff = helper(times[i + 1], times[i - 1]);

      if (diff < 60) {
        ans.push(employee);
        break;
      }
    }
  }

  return ans;
}

function helper(a: [number, number], b: [number, number]): number {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return (a[0] - 1 - b[0]) * 60 + a[1] + (60 - b[1]);
  }
}

export { findHighAccessEmployees };
