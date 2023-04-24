type MultiDimensionalArray = (number | MultiDimensionalArray)[];

// 23.729
// function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
//   if (n === 0) return arr;

//   return arr.reduce((prev: MultiDimensionalArray, cur) => {
//     if (Array.isArray(cur)) {
//       prev = prev.concat(flat(cur, n - 1));
//     } else {
//       prev.push(cur);
//     }
//     return prev;
//   }, []);
// }

// 2.711
function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n === 0) return arr;

  return arr.reduce((prev: MultiDimensionalArray, cur) => {
    if (Array.isArray(cur)) {
      prev.push(...flat(cur, n - 1));
    } else {
      prev.push(cur);
    }
    return prev;
  }, []);
}

export {};
