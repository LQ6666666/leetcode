function isObject(val: unknown): val is object {
  return typeof val === "object" && val !== null;
}

const isArray = Array.isArray;

function areDeeplyEqual(o1: any, o2: any): boolean {
  if (o1 === o2) return true;

  if (!isObject(o1) || !isObject(o2)) return o1 === o2;

  const o1IsArray = isArray(o1);
  const o2IsArray = isArray(o2);

  if (o1IsArray && !o2IsArray || !o1IsArray && o2IsArray) return false;

  const o1Keys = Reflect.ownKeys(o1);
  const o2Keys = Reflect.ownKeys(o2);

  if (o1Keys.length !== o2Keys.length) return false;

  for (const key of o1Keys) {
    if (Object.prototype.hasOwnProperty.call(o2, key)) {
      const v1 = (o1 as any)[key];
      const v2 = (o2 as any)[key];

      if (!areDeeplyEqual(v1, v2)) return false;
    } else {
      return false;
    }
  }

  return true;
}

export {};
