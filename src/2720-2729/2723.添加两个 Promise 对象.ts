async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    Promise.all([promise1, promise2]).then(([a, b]) => {
      resolve(a + b);
    }, reject);
  });
}

export { addTwoPromises };
