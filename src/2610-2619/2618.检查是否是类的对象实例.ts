function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (classFunction === null || classFunction === undefined || obj === null || obj === undefined)
    return false;

  let o = Object.getPrototypeOf(obj);
  const prototype = classFunction.prototype;

  while (o) {
    if (o === prototype) return true;

    o = Object.getPrototypeOf(o);
  }

  return false;
}

export {};
