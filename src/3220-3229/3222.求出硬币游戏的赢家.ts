// function losingPlayer(x: number, y: number): string {
//   let i = 0;
//   while (x >= 1 && y >= 4) {
//     i++;
//     x -= 1;
//     y -= 4;
//   }
//   return i % 2 ? "Alice" : "Bob";
// }

function losingPlayer(x: number, y: number): string {
  return Math.min(x, Math.floor(y / 4)) % 2 ? "Alice" : "Bob";
}

export { losingPlayer };
