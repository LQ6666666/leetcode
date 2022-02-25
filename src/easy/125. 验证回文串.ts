function isPalindrome(s: string): boolean {
    const re = /[0-9a-zA-Z]/;

    let str = "";
    for (let i = 0, len = s.length; i < len; i++) {
        if (re.test(s[i])) {
            str += s[i].toLowerCase();
        }
    }

    let left = 0, right = str.length - 1;
    while (left < right) {
        let a = str[left++];
        let b = str[right--];

        if (a !== b) {
            return false;
        }
    }

    return true;
};