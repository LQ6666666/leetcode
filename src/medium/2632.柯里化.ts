function curry(fn: Function, ...args: any[]): Function {
  const n = fn.length;
  return function curried(this: any, ...innerArgs: any[]) {
    const allArgs = args.concat(innerArgs);
    if (allArgs.length >= n) {
      return fn.apply(this, allArgs);
    } else {
      return curry.call(this, fn, ...allArgs);
    }
  };
}

export {};
