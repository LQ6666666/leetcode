class NestedInteger {
  constructor(value?: number) {}

  isInteger(): boolean {
    throw new Error();
  }

  getInteger(): number | null {
    throw new Error();
  }

  setInteger(value: number) {
    throw new Error();
  }

  add(elem: NestedInteger) {}

  getList(): NestedInteger[] {
    throw new Error();
  }
}

function deserialize(s: string): NestedInteger {
  const n = s.length;
  let index = 0;

  function dfs(): NestedInteger {
    const ni = new NestedInteger();

    if (s[index] === "[") {
      index++;
      while (s[index] !== "]") {
        ni.add(dfs());
        if (s[index] === ",") {
          index++;
        }
      }
      index++;
    } else {
      let negative = 1;
      if (s[index] === "-") {
        index++;
        negative = -1;
      }
      let num = 0;
      while (index < n && s[index] !== "[" && s[index] !== "]" && s[index] !== ",") {
        num = num * 10 + +s[index];
        index++;
      }
      num *= negative;
      ni.setInteger(num);
    }

    return ni;
  }

  return dfs();
}
