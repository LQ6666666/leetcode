declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

Array.prototype.groupBy = function (fn) {
  const arr = this;
  return arr.reduce((acc, cur) => {
    const key = fn(cur);
    acc[key] ||= [];
    acc[key].push(cur);
    return acc;
  }, Object.create(null));
};

export {};
