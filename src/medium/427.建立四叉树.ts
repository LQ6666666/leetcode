class Node {
  constructor(
    public val?: boolean,
    public isLeaf?: boolean,
    public topLeft?: Node | null,
    public topRight?: Node | null,
    public bottomLeft?: Node | null,
    public bottomRight?: Node | null
  ) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
}

function construct(grid: number[][]): Node | null {
  return dfs(0, 0, grid.length, grid.length);

  function dfs(r0: number, c0: number, r1: number, c1: number): Node | null {
    let same = true;
    for (let i = r0; i < r1; i++) {
      for (let j = c0; j < c1; j++) {
        if (grid[i][j] !== grid[r0][c0]) {
          same = false;
          break;
        }
      }
      if (!same) {
        break;
      }
    }

    let node: Node;

    if (same) {
      node = new Node(grid[r0][c0] === 1, true);
    } else {
      node = new Node(
        true,
        false,
        dfs(r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
        dfs(r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
        dfs(Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
        dfs(Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1)
      );
    }

    return node;
  }
}

export { construct };
