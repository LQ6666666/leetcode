class LUPrefix {
  private videos: number[];
  private pos: number;

  constructor(n: number) {
    this.videos = new Array(n);
    this.pos = 1;
  }

  upload(video: number): void {
    this.videos[video] = 1;
  }

  longest(): number {
    for (let i = this.pos; i < this.videos.length; i++) {
      if (!this.videos[i]) {
        break;
      }
      this.pos++;
    }

    return this.pos - 1;
  }
}

export { LUPrefix };
