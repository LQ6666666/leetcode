function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.reduce((ans, hour) => ans + (hour >= target ? 1 : 0), 0);
}

export { numberOfEmployeesWhoMetTarget };
