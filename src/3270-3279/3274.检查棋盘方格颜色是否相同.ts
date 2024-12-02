function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
  const col1 = coordinate1.charCodeAt(0) - 97;
  const col2 = coordinate2.charCodeAt(0) - 97;
  const row1 = +coordinate1.charCodeAt(1);
  const row2 = +coordinate2.charCodeAt(1);

  // 行列都是奇数 || 行列都是偶数 => 黑格子
  const one = (col1 % 2 === 0 && row1 % 2 === 0) || (col1 % 2 !== 0 && row1 % 2 !== 0) ? 1 : 0;
  const two = (col2 % 2 === 0 && row2 % 2 === 0) || (col2 % 2 !== 0 && row2 % 2 !== 0) ? 1 : 0;

  return one === two;
}

export { checkTwoChessboards };
