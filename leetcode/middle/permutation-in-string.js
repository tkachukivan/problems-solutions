/**
 * https://leetcode.com/problems/permutation-in-string
 * sliding window
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    const LETTER_SHIFT = 97;
    const counts = new Uint16Array(26);
    for (let i = 0; i < s1.length; i++) {
        counts[s1.charCodeAt(i) - LETTER_SHIFT]++;
    }
    
    let start = 0;
    let end = 0;
    
    while (end < s2.length) {
        const endCode = s2.charCodeAt(end) - LETTER_SHIFT;
        if (counts[endCode]) {
            counts[endCode]--;
            end++
            if (end - start === s1.length) return true;
        } else {
            if (start !== end) {
                counts[s2.charCodeAt(start) - LETTER_SHIFT]++;
                start++
            } else {
                start++;
                end++;
            }
        }
    }
    
    return false;
//     first version    
//     if (s1.length > s2.length) return false;
//     const counts = new Map();
//     for (let i = 0; i < s1.length; i++) {
//         counts.set(s1[i], (counts.get(s1[i]) || 0) + 1);
//     }
    
//     let start = 0;
//     let end = 0;
    
//     while (end < s2.length) {
//         if (counts.has(s2[end])) {
//             let count = counts.get(s2[end]);
//             if (count > 0) {
//                 counts.set(s2[end], --count);
//                 end++;
//             } else {
//                 counts.set(s2[start], counts.get(s2[start]) + 1);
//                 start++;
//             }
//             if (end - start === s1.length) return true;
//         } else {
//             if (start !== end) {
//                 while(start !== end) {
//                     counts.set(s2[start], counts.get(s2[start]) + 1);
//                     start++;
//                 }
//             }
//             end++;
//             start = end;
//         }
//     }
    
//     return false;
};