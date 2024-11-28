function reverseWords(s: string): string {
    const arr = s.split(" ");
    let ans = "";

    for (const item of arr) {
        ans = ans + reverseString(item) + " ";
    }

    return ans.slice(0, -1);

    function reverseString(s: string): string {
        let str = "";
        for (const ch of s) {
            str = ch + str;
        }
        return str;
    }
};

console.log(reverseWords("Let's take LeetCode contest"));// s'teL ekat edoCteeL tsetnoc
console.log(reverseWords("God Ding"));// doG gniD

export { };