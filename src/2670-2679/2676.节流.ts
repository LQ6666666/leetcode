type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let trigger = true;
  let callArgs: any[] | null = null;

  return function (...args) {
    track(args);
  };

  function track(args: any[]) {
    if (trigger) {
      fn(...args);
      trigger = false;

      setTimeout(() => {
        trigger = true;

        if (callArgs) {
          track(callArgs);
          callArgs = null;
        }
      }, t);
    } else {
      callArgs = args;
    }
  }
}

export {};
