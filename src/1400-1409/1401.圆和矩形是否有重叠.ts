function checkOverlap(
  radius: number,
  xCenter: number,
  yCenter: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): boolean {
  // 找到在矩形中的到圆心 (xCenter, yCenter) 最近的点 (x, y)
  const x = Math.max(x1, Math.min(xCenter, x2));
  const y = Math.max(y1, Math.min(yCenter, y2));

  // 判断 (x, y) 是否在圆中
  return (x - xCenter) * (x - xCenter) + (y - yCenter) * (y - yCenter) <= radius * radius;
}

export {};
