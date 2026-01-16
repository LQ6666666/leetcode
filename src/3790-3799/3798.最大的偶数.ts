function largestEven(s: string): string {
  const index = s.lastIndexOf("2");
  if (index === -1) {
    return "";
  }
  return s.slice(0, index + 1);
}

export {};
