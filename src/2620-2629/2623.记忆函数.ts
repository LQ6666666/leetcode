type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const cache = new Map<string, any>();
  return function (...args: any[]) {
    const key = JSON.stringify(args);
    let result = cache.get(key);
    if (result === undefined) {
      result = fn(...args);
      cache.set(key, result);
    }
    return result;
  };
}

export {};
