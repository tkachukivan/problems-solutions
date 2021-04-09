/**
 * https://leetcode.com/problems/repeated-substring-pattern
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    if (s.length < 2) return false;
    let mi = Math.floor(s.length / 2);
    while(mi > 0) {
        if (s[0] !== s[mi] || (s.length % mi) !== 0) {
            mi--;
            continue;
        }
        
        const candidate = s.substring(0, mi);
        let fail = false;
        let j = 0;
        for (let i = mi; i < s.length; i++) {
            if (candidate[j++] !== s[i]) {
                fail = true;
                break;
            }
            if (j === candidate.length) j = 0;
        }
        if (!fail && j === 0) return true;
        mi--;
    }
          
    return false;
    // return s.repeat(2).slice(1, -1).includes(s);
}