interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function (this) {
  const arr = this;
  const n = arr.length;
  return n === 0 ? -1 : arr[n - 1];
};

export {};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
