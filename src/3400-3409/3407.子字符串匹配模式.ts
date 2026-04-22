function hasMatch(s: string, p: string): boolean {
  const [frontPart, backendPart] = p.split("*");
  const index = s.indexOf(frontPart);
  if (index === -1) {
    return false;
  }
  return s.indexOf(backendPart, index + frontPart.length) !== -1;
}

export {};
