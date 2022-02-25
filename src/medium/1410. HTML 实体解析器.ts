// function entityParser(text: string): string {
//     const map = new Map<string, string>();
//     map.set("quot", `"`);
//     map.set("apos", `'`);
//     map.set("amp", `&`);
//     map.set("gt", `>`);
//     map.set("lt", `<`);
//     map.set("frasl", `/`);

//     let ans = "";
//     let temp = "", flag = text.charAt(0) === "&";
//     for (let i = 0, len = text.length; i < len; i++) {
//         if (text[i] === "&") {
//             if (flag) {
//                 if (text[i - 1] === "&") {
//                     ans += "&";
//                 }
//             }

//             ans = ans + temp;
//             flag = true;
//             temp = "";
//         } else if (text[i] === ";") {
//             if (flag === false) {
//                 ans += text[i];
//                 continue;
//             }

//             if (map.has(temp)) {
//                 ans += map.get(temp);
//             } else {
//                 ans = ans + `&${temp};`;
//             }

//             flag = false;
//             temp = "";
//         } else if (flag) {
//             if (text[i - 1] === "&" && text[i - 2] === "&" && text[i - 3] === "&") {
//                 ans += "&";
//             }

//             temp += text[i];
//         } else {
//             ans += text[i];
//         }
//     }

//     if (flag) {
//         ans = ans + "&" + temp;
//     }

//     return ans;
// };

function entityParser(text: string): string {
    const map = new Map<string, string>();
    map.set("quot", `"`);
    map.set("apos", `'`);
    map.set("amp", `&`);
    map.set("gt", `>`);
    map.set("lt", `<`);
    map.set("frasl", `/`);

    let ans = "";

    for (let i = 0, len = text.length; i < len; i++) {
        if (text[i] !== "&") {
            ans += text[i];
            continue;
        }

        let index = i + 1;

        while (index < len) {
            if (text[index] === "&") {
                break;
            }

            if (text[index] === ";") {
                break;
            }

            index++;
        }

        if (text[index] === "&") {
            ans += "&";

            if (index + 1 === len) {
                ans += "&";
                break;
            }
            continue;
        }

        if (index === len) {
            return ans + text.slice(index);
        } else {
            const key = text.slice(i + 1, index);

            if (map.has(key)) {
                ans += map.get(key)!;
            } else {
                ans += `&${key};`;
            }

            i = index;
        }
    };

    return ans;
}