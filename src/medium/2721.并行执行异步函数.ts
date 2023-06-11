async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    const n = functions.length;
    const result = new Array<T>(n);
    let count = 0;

    for (let i = 0; i < n; i++) {
      Promise.resolve(functions[i]()).then(value => {
        count++;
        result[i] = value;

        if (count === n) {
          resolve(result);
        }
      }, reject);
    }
  });
}

export {};
