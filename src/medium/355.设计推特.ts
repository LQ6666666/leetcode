class Twitter {
  private postTimestamp: number;
  private postMap: Map<number, { timestamp: number; tweetId: number }[]>;
  private followMap: Map<number, Set<number>>;

  constructor() {
    this.postTimestamp = 0;
    this.postMap = new Map();
    this.followMap = new Map();
  }

  postTweet(userId: number, tweetId: number): void {
    let post = this.postMap.get(userId);
    if (!post) {
      this.postMap.set(userId, (post = []));
    }
    post.push({ timestamp: this.postTimestamp++, tweetId });
  }

  getNewsFeed(userId: number): number[] {
    const post = (this.postMap.get(userId) ?? []).concat();
    const followee = this.followMap.get(userId) ?? [];
    followee.forEach(followeeId => {
      post.push(...(this.postMap.get(followeeId) ?? []));
    });
    post.sort((a, b) => b.timestamp - a.timestamp);
    return post.slice(0, 10).map(({ tweetId }) => tweetId);
  }

  follow(followerId: number, followeeId: number): void {
    let followee = this.followMap.get(followerId);
    if (!followee) {
      this.followMap.set(followerId, (followee = new Set()));
    }
    followee.add(followeeId);
  }

  unfollow(followerId: number, followeeId: number): void {
    const followee = this.followMap.get(followerId);
    if (followee) {
      followee.delete(followeeId);
    }
  }
}

export { Twitter };
