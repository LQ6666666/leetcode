function secondsBetweenTimes(startTime: string, endTime: string): number {
  return transformSecond(endTime) - transformSecond(startTime);
}

function transformSecond(time: string): number {
  const [hour, minute, second] = time.split(":").map(x => Number(x));
  return hour * 60 * 60 + minute * 60 + second;
}

export {};
