function countDaysTogether(arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
  if (leaveAlice < arriveBob || leaveBob < arriveAlice) return 0;

  const MOUTH_DAY = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 比较大小
  // 最后来的时候
  const arrive = comparison(arriveAlice, arriveBob);
  // 最早走的时间
  const leave = comparison(leaveAlice, leaveBob, false);

  // 计算相差的天数
  // leave - arrive
  let [aMount, aDay] = arrive.split("-").map(v => +v);
  let [lMount, lDay] = leave.split("-").map(v => +v);
  // 月份 - 1
  aMount--, lMount--;

  let ans = 0;
  for (let i = aMount; i < lMount; i++) {
    ans += MOUTH_DAY[i];
  }

  ans = ans - aDay + lDay + 1;
  return ans;
};

// 默认返回大的字符串，flag 表示返回大还是小
function comparison(t1: string, t2: string, flag = true): string {
  const [mouth1, day1] = t1.split("-");
  const [mouth2, day2] = t2.split("-");

  if(mouth1 === mouth2) {
    if(day1 > day2) {
      return flag ? t1 : t2;
    } else {
      return flag ? t2 : t1;
    }
  } else if (mouth1 > mouth2) {
    return flag ? t1 : t2;
  } else {
    return flag ? t2 : t1;
  }
}


console.log(countDaysTogether("08-15", "08-18", "08-16", "08-19"));
console.log(countDaysTogether("10-01", "10-31", "11-01", "12-31"));
console.log(countDaysTogether("09-01", "10-19", "06-19", "10-20")); // 49

// export { countDaysTogether };
