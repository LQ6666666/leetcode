const isObject = (val: unknown): val is object => typeof val === "object" && val !== null;
const isArray = Array.isArray;

function objDiff(
  obj1: Record<string, any>,
  obj2: Record<string, any>,
  result: Record<string, any> = {}
): any {
  if (!isObject(obj1) || !isObject(obj2)) {
    return result;
  }

  const keys = Object.keys(obj1);

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj2, key)) {
      if (
        (isArray(obj1[key]) && !isArray(obj2[key])) ||
        (isArray(obj2[key]) && !isArray(obj1[key]))
      ) {
        result[key] = [obj1[key], obj2[key]];
      } else if (isObject(obj1[key]) && isObject(obj2[key])) {
        const diff = objDiff(obj1[key], obj2[key]);
        if (Object.keys(diff).length) {
          result[key] = diff;
        }
      } else if (obj1[key] !== obj2[key]) {
        result[key] = [obj1[key], obj2[key]];
      }
    }
  }

  return result;
}

export { objDiff };
