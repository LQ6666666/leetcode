function exchangeBits(num: number): number {
  // 取奇数位
  const a = 0b10101010101010101010101010101010;
  // 取偶数位
  const b = 0b01010101010101010101010101010101;

  return ((num & a) >> 1) | ((num & b) << 1);
}

export { exchangeBits };
