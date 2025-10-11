function doesValidArrayExist(derived: number[]): boolean {
  return derived.reduce((memo, num) => memo ^ num, 0) === 0;
}

export { doesValidArrayExist };
