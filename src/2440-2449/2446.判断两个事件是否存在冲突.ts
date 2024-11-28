function haveConflict(event1: string[], event2: string[]): boolean {
  return event1[0].localeCompare(event2[1]) <= 0 && event2[0].localeCompare(event1[1]) <= 0;
}

export {};
