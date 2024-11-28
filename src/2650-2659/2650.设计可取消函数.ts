function cancellable<T>(generator: Generator<Promise<any>, T, unknown>): [() => void, Promise<T>] {
  let cancel: () => void;

  const promise = new Promise<T>((resolve, reject) => {
    cancel = (msg = "Cancelled") => next(msg, "throw");

    const next = (args: any, fnName: "next" | "throw" = "next") => {
      try {
        const { value, done } = generator[fnName](args);

        if (done) return resolve(value);

        Promise.resolve(value)
          .then(next)
          .catch(error => next(error, "throw"));
      } catch (error) {
        reject(error);
      }
    };

    next(undefined);
  });

  return [cancel!, promise];
}

export {};
