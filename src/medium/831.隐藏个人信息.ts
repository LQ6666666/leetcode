function maskPII(s: string): string {
  // 1. 判断是邮箱还是手机号
  const index = s.indexOf("@");
  const set = new Set(["+", "-", "(", ")", " "]);

  if (index === -1) {
    const phone = s.split("").reduce((prev, cur) => (prev += set.has(cur) ? "" : cur), "");
    const n = phone.length;

    const code = {
      10: "***-***-",
      11: "+*-***-***-",
      12: "+**-***-***-",
      13: "+***-***-***-"
    }[n];
    return code + phone.slice(-4);
  } else {
    const name = s.slice(0, index);
    const maskName = name.at(0) + "*****" + name.at(-1);
    return maskName.toLowerCase() + "@" + s.slice(index + 1).toLowerCase();
  }
}

export {};
