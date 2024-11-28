const isObject = (val: unknown): val is object => typeof val === "object" && val !== null;
const isArray = Array.isArray;

function jsonStringify(object: any): string {
  if (isArray(object)) {
    const result = object.reduce<string[]>((acc, cur) => {
      acc.push(jsonStringify(cur));
      return acc;
    }, []);

    return `[${join(result)}]`;
  } else if (isObject(object)) {
    const result = Object.keys(object).reduce<string[]>((acc, key) => {
      acc.push(`"${key}":${jsonStringify(object[key as keyof typeof object])}`);
      return acc;
    }, []);

    return `{${result.join(",")}}`;
  } else if (typeof object === "string") {
    return `"${object}"`;
  } else {
    return object;
  }
}

function join(arr: string[]): string {
  const n = arr.length - 1;
  if (n < 0) return "";

  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += arr[i] + ",";
  }
  return ans + arr[n];
}

export {};

// {"y":1,"x":2}
// {"a":"str","b":-12,"c":true,"d":null}
// {"key":{"a":1,"b":[{},,"Hello"]}}
// true

// {"y":1,"x":2}
// {"a":"str","b":-12,"c":true,"d":null}
// {"key":{"a":1,"b":[{},null,"Hello"]}}
// true

console.log(["{}", null, "Hello"].join(","));
