type Obj = Record<string, any>;

function join(arr1: Obj[], arr2: Obj[]): Obj[] {
  const map = new Map<any, number>();
  const result: Obj[] = [];

  const arr = arr1.concat(arr2);

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const index = map.get(item.id);

    if (index === undefined) {
      const index = result.push(item);
      map.set(item.id, index - 1);
    } else {
      result[index] = Object.assign(result[index], item);
    }
  }

  return result.sort((a, b) => a.id - b.id);
}

export { join };
