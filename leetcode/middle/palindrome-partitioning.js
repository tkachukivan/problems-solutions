/**
 * https://leetcode.com/problems/palindrome-partitioning
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const result = [];
    collectPalindroms(0, []);
    return result;
    
    function collectPalindroms(start, currentList) {
        if (start >= s.length) {
            result.push([...currentList]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isValid(start, end)) {
                currentList.push(s.substring(start, end + 1));
                collectPalindroms(end + 1, currentList);
                currentList.pop();
            }
        }
    }
    
    function isValid(from, to) {       
        while (from <= to) {
            if (s[from++] !== s[to--]) return false;
        }
        
        return true;
    }
};