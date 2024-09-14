function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length;
  let queue: number[] = [0];
  const visits = new Set<number>();

  while (queue.length) {
    const nextQueue: number[] = [];

    for (const i of queue) {
      visits.add(i);

      rooms[i].forEach(x => {
        if (!visits.has(x)) {
          nextQueue.push(x);
        }
      });
    }

    queue = nextQueue;
  }

  return visits.size === n;
}

export { canVisitAllRooms };
