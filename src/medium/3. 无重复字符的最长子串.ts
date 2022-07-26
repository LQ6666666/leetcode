
// function lengthOfLongestSubstring1(s: string): number {
//     const set = new Set<number>();
//     const strLength = s.length;

//     for (let i = 0; i < strLength; i++) {
//         for (let j = i; j < strLength; j++) {
//             const element = s.substring(i, j + 1);

//             if (element.length === new Set<string>(element.split('')).size) {
//                 set.add(element.length);
//             }
//         }
//     }

//     return Array.from<number>(set).sort((a, b) => b - a)[0] ?? 0;
// };

// function lengthOfLongestSubstring(s: string): number {
//     let index: number = 0;
//     let result: number = 0;

//     for (let i = 0, sLength = s.length; i < sLength; i++) {
//         const position: number = s.indexOf(s[i], index);

//         if (position < i) {
//             index = position + 1;
//         } else {
//             result = Math.max(result, i - index + 1);
//         }
//     }

//     return result;
// };


function lengthOfLongestSubstring(s: string): number {
    const n = s.length;
    let left = 0, right = 0;
    const set = new Set<string>();
    let ans = 0;

    while (right < n) {
        if (set.has(s[left])) {
            set.delete(s[left]);
            left++;
        }

        while (!set.has(s[right]) && right < n) {
            set.add(s[right]);
            right++;
        }

        ans = Math.max(ans, set.size);
    }

    return ans;
};



console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(""));
// console.log(lengthOfLongestSubstring(" "));
// console.log(lengthOfLongestSubstring("au"));