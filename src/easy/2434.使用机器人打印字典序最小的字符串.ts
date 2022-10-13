function robotWithString(s: string): string {
  const chCount = new Array<number>(26).fill(0);
  for (const ch of s) {
    chCount[charTransformIndex(ch)]++;
  }

  let ans = "";
  const stack: string[] = [];
  for (const ch of s) {
    stack.push(ch);
    chCount[charTransformIndex(ch)]--;

    while (stack.length && !judge(charTransformIndex(peek(stack)!))) {
      ans += stack.pop()!;
    }
  }

  return ans;

  function peek<T>(array: T[]) {
    return array.at(-1);
  }

  function charTransformIndex(char: string) {
    return char.charCodeAt(0) - 97;
  }

  // 判断前面还有没有字母
  function judge(index: number) {
    for (let i = 0; i < index; i++) {
      if (chCount[i]) {
        return true;
      }
    }
    return false;
  }
}

export {};
