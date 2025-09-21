function watchedVideosByFriends(
  watchedVideos: string[][],
  friends: number[][],
  id: number,
  level: number
): string[] {
  const n = watchedVideos.length;

  let queue: number[] = [id];
  const visits = new Array<boolean>(n);
  visits[id] = true;
  let k = 0;
  let f: number[] = [];

  while (queue.length) {
    const newQueue: number[] = [];

    for (const friendId of queue) {
      for (const id of friends[friendId]) {
        if (!visits[id]) {
          newQueue.push(id);
          visits[id] = true;
        }
      }
    }

    if (k === level) {
      f = queue;
    }

    queue = newQueue;
    k++;
  }

  const frequencyMap = new Map<string, number>();
  for (const id of f) {
    for (const video of watchedVideos[id]) {
      frequencyMap.set(video, (frequencyMap.get(video) ?? 0) + 1);
    }
  }

  const videos = Array.from<string>(frequencyMap.keys());
  videos.sort((a, b) => {
    const aa = frequencyMap.get(a)!;
    const bb = frequencyMap.get(b)!;
    if (aa === bb) {
      return a.localeCompare(b);
    } else {
      return aa - bb;
    }
  });

  return videos;
}

export { watchedVideosByFriends };
