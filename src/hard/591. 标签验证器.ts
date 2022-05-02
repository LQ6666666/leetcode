function isValid(code: string): boolean {
    const n = code.length;
    const stack: string[] = [];

    for (let i = 0; i < n; i++) {
        const ch = code[i];
        // 开始
        if (ch === "<") {
            const next = code[i + 1];

            if (next === "!") {// <![CDATA[<div>]]>
                if (stack.length === 0) return false;
                const s = code.slice(i + 1, i + 9);
                if (s !== "![CDATA[") {
                    return false;
                }

                const endIndex = code.indexOf("]]>", i + 9);
                if (endIndex === -1) return false;
                // console.log(code.slice(i, endIndex + 3));
                i = endIndex;
            } else if (next === "/") {// </DIV> 闭合标签
                const endIndex = code.indexOf(">", i + 2);
                if (endIndex === -1) return false;

                const endTagName = code.slice(i + 2, endIndex);
                if (!isValidTagName(endTagName)) return false;

                if (stack.length === 0) return false;
                const startTagName = stack.pop()!;

                // console.log(startTagName, endTagName, stack)
                if (startTagName !== endTagName) {
                    return false;
                }

                i = endIndex;
                if (stack.length === 0 && (i !== n - 1)) {
                    return false
                }
            } else {// <DIV> 开始标签
                // 找 >
                const endIndex = code.indexOf(">", i + 1);
                if (endIndex === -1) return false;

                const tagName = code.slice(i + 1, endIndex);
                // console.log(tagName)
                if (!isValidTagName(tagName)) {
                    return false;
                }

                // tagName 必须是大写
                stack.push(tagName);
                i = endIndex;
            }
        } else {
            if (stack.length === 0) {
                return false;
            }
        }
    }

    return stack.length === 0;

    function isValidTagName(tagName: string) {
        // 长度在范围 [1,9] 之间
        if (!(1 <= tagName.length && tagName.length <= 9)) {
            return false;
        }

        const re = /[A-Z]/
        // 合法的 TAG_NAME 仅含有大写字母
        for (const c of tagName) {
            if (re.test(c)) {
                continue;
            }

            return false;
        }

        return true;
    }
};


// true
console.log(isValid("<DIV>TAG_CONTENT</DIV>"));
console.log(isValid("<DIV>This is the first line <![CDATA[<div>]]></DIV>"));
console.log(isValid("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"));
console.log(isValid("<DIV>>>  ![cdata[]] <![CDATA[<div>]>]]>]]>>]</DIV>"));
console.log(isValid("<A><B>111</B>111</A>"))
console.log(isValid("<A><B><A>123</A></B></A>"));
console.log(isValid("<DIV>This is the first line <![CDATA[<div>]]></DIV>"));
console.log(isValid("<A><A>456</A>  <A> 123  !!  <![CDATA[]]>  123 </A>   <A>123</A></A>"));

console.log("----false----");
// // false
console.log(isValid("<AAAAAAAAAA></AAAAAAAAAA>"));
console.log(isValid("<A></A><B></B>"))
console.log(isValid("<A>  <B> </A>   </B>"));
console.log(isValid("<DIV>  div tag is not closed  <DIV>"));
console.log(isValid("<DIV>  unmatched <  </DIV>"));
console.log(isValid("<DIV> closed tags with invalid tag name  <b>123</b> </DIV>"));
console.log(isValid("<DIV> unmatched tags with invalid tag name  </1234567890> and <CDATA[[]]>  </DIV>"));
console.log(isValid("<DIV>  unmatched start tag <B>  and unmatched end tag </C>  </DIV>"));
console.log(isValid("<![CDATA[wahaha]]]><![CDATA[]> wahaha]]>"));
console.log(isValid("<A>  </A> <B>   </B>"));



export { };