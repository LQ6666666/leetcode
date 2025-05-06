const MouthMap = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
].reduce((map, key, index) => {
  map.set(key, (index + 1).toString().padStart(2, "0"));
  return map;
}, new Map<string, string>());

function reformatDate(date: string): string {
  const [day, mouth, year] = date.split(" ");
  return `${year}-${MouthMap.get(mouth)!}-${parseInt(day).toString().padStart(2, "0")}`;
}

export { reformatDate };
