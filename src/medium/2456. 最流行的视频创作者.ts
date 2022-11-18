function mostPopularCreator(creators: string[], ids: string[], views: number[]): string[][] {
  const n = creators.length;
  // 1.找出每个作者的流行度，和他的最流行的 id
  let max = Number.MIN_SAFE_INTEGER;
  const map = new Map<string, { view: number; id: string; popular: number }>();

  for (let i = 0; i < n; i++) {
    let value = map.get(creators[i]);
    const view = views[i];
    const id = ids[i];

    if (value) {
      if (view > value.view) {
        value.view = view;
        value.id = id;
      } else if (view === value.view && id < value.id) {
        // 如果某个创作者存在多个播放量最高的视频，则只需要找出字典序最小的 id
        value.id = id;
      }

      // 视频创作者的 流行度 是该创作者的 所有 视频的播放量的 总和
      value.popular += view;
    } else {
      value = { view, id, popular: view };
    }

    max = Math.max(max, value.popular);
    map.set(creators[i], value);
  }

  // 2.如果存在多个创作者流行度都最高，则需要找出所有符合条件的创作者
  let ans: string[][] = [];
  map.forEach((value, key) => {
    if (value.popular === max) {
      ans.push([key, value.id]);
    }
  });

  return ans;
}

export {};
