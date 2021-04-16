/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    let letters = s.split('');
    
    while(letters.length > k) {
        let start = 0;
        let end = 1;
        let removed = false;

        while(end < letters.length) {
            if (letters[start] === letters[end]) {
              end++
            } else {
              start = end;
              end++
            }
            
            if (end - start === k) {
                removed = true;
                while(start < end) letters[start++] = null;
                end++
            }
        }
        
        if (removed) {
            letters = letters.filter(l => l !== null);
        } else {
            break;
        }
    }
    
    return letters.join('');
    // const stack = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (stack.length && stack[stack.length - 1][0] === s[i]) {
    //         if (stack[stack.length - 1][1] === k - 1) {
    //             while(stack.length && stack[stack.length - 1][0] === s[i]) stack.pop();
    //         } else {
    //             stack.push([s[i], stack[stack.length - 1][1] + 1])
    //         }
    //     } else {
    //         stack.push([s[i], 1]);
    //     }
    // }
    
    // return stack.map((el) => el[0]).join('');
};