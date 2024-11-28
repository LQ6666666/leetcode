function haveConflict(event1: string[], event2: string[]): boolean {
  // event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
  // event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
  const [[startTime1, endTime1], [startTime2, endTime2]] = [event1, event2].map(e =>
    e.map(formatter)
  );

  return startTime1 <= endTime2 && startTime2 <= endTime1;

  function formatter(time: string): number {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 3600 + minute * 60;
  }
}

export { haveConflict };
