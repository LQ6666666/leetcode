function validPalindrome(s: string): boolean {
    function valid(str: string, left: number, right: number) {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return valid(s, left + 1, right) || valid(s, left, right - 1);
        }
    }

    return true;
};