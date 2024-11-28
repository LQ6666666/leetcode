type F = () => Promise<any>;

async function promisePool(functions: F[], limit: number): Promise<any> {
  const n = functions.length;
  const executing = new Set<Promise<any>>();
  const result: Promise<any>[] = [];

  for (let i = 0; i < n; i++) {
    const p = (result[i] = functions[i]());

    if (limit < n) {
      const e: Promise<any> = p.then(() => executing.delete(e));
      executing.add(e);

      if (executing.size >= limit) {
        await Promise.race(executing);
      }
    }
  }

  return Promise.all(result);
}

export {};
