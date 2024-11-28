function isAdditiveNumber(num: string): boolean {
  if (num.length < 3) {
    return false;
  }

  const array: [string, string][] = []

  // 找出全部的前两个数字的组合
  for (let i = 1; i < num.length; i++) {
    const str = num.slice(i, num.length)

    for (let j = 1; j < str.length; j++) {
      array.push([num.slice(0, i), str.slice(0, j)])
    }
  }

  for (const [n1, n2] of array) {
    const index = n1.length + n2.length;
    const sum = +n1 + +n2

    const n3 = num.slice(index, index + sum.toString().length);

    if (+n3 !== sum) {
      continue;
    }

    if ([n1, n2, n3].some(n => n.startsWith("0") && n.length > 1)) {
      return false;
    }

    if (sum === +num.slice(index, num.length)) {
      return true
    }

    if (check(+n2, num.slice(index, num.length))) {
      return true
    }
  }

  return false;
};


const check = (n1: number, num: string): boolean => {
  if (n1 && num.length === 0) {
    return true;
  }

  const array: string[] = []

  for (let i = 1; i < num.length; i++) {
    array.push(num.slice(0, i));
  }

  for (let i = 0; i < array.length; i++) {
    const index = array[i].length;
    const sum = n1 + +array[i];
    const n3 = num.slice(index, index + sum.toString().length)

    if (n1 + +array[i] !== +n3) {
      continue
    }

    if ([n1 + "", array[i] + "", n3].some(n => n.startsWith("0") && n.length > 1)) {
      return false;
    }

    if (sum === +num.slice(index)) {
      return true
    }

    if (check(+array[i], num.slice(index))) {
      return true
    }

  }

  return false;
}

export { isAdditiveNumber };
