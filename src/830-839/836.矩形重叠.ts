function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  if (rec1[0] == rec1[2] || rec1[1] == rec1[3] || rec2[0] == rec2[2] || rec2[1] == rec2[3]) {
    return false;
  }

  return !(
    // left
    (
      rec1[2] <= rec2[0] ||
      // bottom
      rec1[3] <= rec2[1] ||
      // right
      rec1[0] >= rec2[2] ||
      // top
      rec1[1] >= rec2[3]
    )
  );
}

export {};
