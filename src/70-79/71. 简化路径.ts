function simplifyPath(path: string): string {
    const stack: string[] = [];
    const pathArr: string[] = path.split("/");

    for (let i = 0; i < pathArr.length; i++) {
        const p = pathArr[i];
        if (!p || p === ".") {
            continue;
        }

        if (p === "..") {
            stack.pop();
        } else {
            stack.push(p);
        }
    }

    return "/" + stack.join("/");
};


console.log(simplifyPath("/home/"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/a/./b/../../c/"));