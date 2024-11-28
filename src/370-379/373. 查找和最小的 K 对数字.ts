// function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
//     const all: { value: number, pair: [number, number] }[] = [];

//     // 找出所有 对数，并记录之和
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             all.push({
//                 value: nums1[i] + nums2[j],
//                 pair: [nums1[i], nums2[j]]
//             })
//         }
//     }

//     all.sort((a, b) => a.value - b.value);

//     return all.slice(0, k).map(({ pair }) => pair);
// };

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const ans: number[][] = [];
    const n = nums1.length, m = nums2.length;

    const nLen = Math.min(n, k);
    const mLen = Math.min(m, k);

    for (let i = 0; i < nLen; i++) {
        for (let j = 0; j < mLen; j++) {
            ans.push([nums1[i], nums2[j]])
        }
    }

    ans.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    return ans.slice(0, k);
};

console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3));
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2));
console.log(kSmallestPairs([1, 2], [3], 3));
console.log(kSmallestPairs([1], [3, 5, 6, 7, 8, 100], 9));
