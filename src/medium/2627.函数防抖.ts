type F = (...p: any[]) => any;

function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return function (this: any, ...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, t);
  };
}

export {};
