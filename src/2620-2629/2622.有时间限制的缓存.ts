class TimeLimitedCache {
  private cache: Map<number, [number, number]>;

  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const result = this.cache.get(key);

    const now = Date.now();
    const expires = now + duration;

    let ans = true;
    if (result === undefined) {
      ans = false;
    } else {
      // 判断是否过期
      if (result[1] < now) {
        ans = false;
      }
    }

    this.cache.set(key, [value, expires]);
    return ans;
  }

  get(key: number): number {
    const result = this.cache.get(key);
    if (result === undefined || result[1] < Date.now()) return -1;

    return result[0];
  }

  count(): number {
    const now = Date.now();
    let ans = 0;
    this.cache.forEach(([, expires]) => {
      if (now <= expires) ans++;
    });
    return ans;
  }
}

export {};
