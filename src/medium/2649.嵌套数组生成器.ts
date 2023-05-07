type MultidimensionalArray = (MultidimensionalArray | number)[];

const isArray = Array.isArray;
function* inorderTraversal(arr: MultidimensionalArray): Generator<number, void, unknown> {
  for (const item of arr) {
    if (isArray(item)) {
      yield* inorderTraversal(item);
    } else {
      yield item;
    }
  }
}

export {};
