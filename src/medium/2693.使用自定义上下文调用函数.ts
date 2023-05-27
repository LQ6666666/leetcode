declare global {
  interface Function {
    callPolyfill(context: Record<any, any>, ...args: any[]): any;
  }
}

Function.prototype.callPolyfill = function (context, ...args): any {
  const fn = this;
  const fnName = Symbol();
  const obj = Object(context ?? globalThis);
  obj[fnName] = fn;
  const result = obj[fnName](...args);
  delete obj[fnName];

  return result;
};

export {};
