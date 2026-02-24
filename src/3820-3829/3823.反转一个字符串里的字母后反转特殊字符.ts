const set = new Set("!@#$%^&*()");

function reverseByType(s: string): string {
  const n = s.length;
  const arr = s.split("");
  for (let i = 0, x = n - 1, y = n - 1; i < n; i++) {
    const c = arr[i];
    if (set.has(arr[i])) {
      while (x > i) {
        if (set.has(arr[x])) {
          arr[i] = arr[x];
          arr[x] = c;
          x--;
          break;
        }
        x--;
      }
    } else {
      while (y > i) {
        if (!set.has(arr[y])) {
          arr[i] = arr[y];
          arr[y] = c;
          y--;
          break;
        }
        y--;
      }
    }
  }
  return arr.join("");
}

export {};
