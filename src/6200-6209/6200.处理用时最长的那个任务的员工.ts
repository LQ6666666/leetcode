function hardestWorker(n: number, logs: number[][]): number {
  let [ans, temp] = logs[0];

  let time = 0;
  for (const [id, moment] of logs) {
    const t = moment - time;

    if (t > temp || (t === temp && id < ans)) {
      ans = id;
      temp = t;
    }

    time = moment;
  }

  return ans;
};

export { hardestWorker };
