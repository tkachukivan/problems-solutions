/**
 * https://leetcode.com/problems/determine-if-string-halves-are-alike
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    // const vovels = { a: true, e: true, i: true, o: true, u: true };
    const vovels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'O', 'U', 'I', 'E']);

    const n = s.length;
    // const str = s.toLowerCase();
    let firstHalf = 0;
    let secondHalf = n / 2;
    let balance = 0;

    while (secondHalf < n) {
        if (vovels.has(s[firstHalf++])) balance++;
        if (vovels.has(s[secondHalf++])) balance--;
    }

    return balance === 0;
};