/**
 * https://leetcode.com/problems/regular-expression-matching/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;
    const memo = Array.from({ length: n + 1 }, () => new Array(m + 1));
    return match(0, 0);
    
    function match(stringIndex, patternIndex) {
        if (memo[stringIndex][patternIndex] !== undefined) return memo[stringIndex][patternIndex];
        if (patternIndex >= m) return stringIndex === n;

        const characterMatched = stringIndex < n && (p[patternIndex] === '.' || s[stringIndex] === p[patternIndex]);
        
        let result;
        if (patternIndex + 1 < m && p[patternIndex + 1] === '*') {
            result = match(stringIndex, patternIndex + 2) || (characterMatched && match(stringIndex + 1, patternIndex))
        } else {
            result = characterMatched && match(stringIndex + 1, patternIndex + 1);
        }
        
        memo[stringIndex][patternIndex] = result;
        return result;
    }
};

var isMatch = function(s, p) {
    const n = s.length;
    const m = p.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1));
    dp[0][0] = true;

	// fill first row
	for (let i = 1; i <= p.length; i++) {
		let pChar = p[i - 1];

		if (pChar === '*') dp[0][i] = dp[0][i - 2];
	}
	// can only be the most previous value
	for (let row = 1; row <= s.length; row++) {
		for (let col = 1; col <= p.length; col++) {
			let pChar = p[col - 1],
				sChar = s[row - 1],
				previousPChar = p[col - 2]; // col - 2 is for deletion of the previous character

			if (pChar === '*') {
				// dp[row][col - 2] --> if we shaved off the letter, would we have a match
				if (dp[row][col - 2]) {
					dp[row][col] = true;
				}
				// if previous p and sChar are the same, we look
				else if (previousPChar === sChar || previousPChar === '.') {
					// This is the weirdest case to understand
					// Since the previousPChar and sChar are equal, we can look at s as if it
					// does not exist, to account for shavng it off / extra occurances
					// of that single letter
					dp[row][col] = dp[row - 1][col];
				}
			} else if (pChar === sChar || pChar === '.') {
				// answer is the same as if not having these two letters
				dp[row][col] = dp[row - 1][col - 1];
			}
		}
	}
	return !!dp[s.length][p.length];
};