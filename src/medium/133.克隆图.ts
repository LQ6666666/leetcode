class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;

  const root = new Node(node.val);
  let queue: Node[] = [node];
  const visited = new Map<Node, Node>([[node, root]]);

  while (queue.length) {
    const newQueue: Node[] = [];

    for (const item of queue) {
      const neighbors = visited.get(item)!.neighbors;

      for (const neighbor of item.neighbors) {
        let newNode = visited.get(neighbor);
        if (newNode === undefined) {
          visited.set(neighbor, (newNode = new Node(neighbor.val)));
          newQueue.push(neighbor);
        }

        neighbors.push(newNode);
      }
    }
    queue = newQueue;
  }

  return root;
}

export {};
