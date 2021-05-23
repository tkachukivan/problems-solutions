/**
 * https://leetcode.com/problems/find-the-shortest-superstring/
 * @param {string[]} words
 * @return {string}
 */
// tle
// var shortestSuperstring = function(words) {
//     const n = words.length;
//     const used = new Array(n).fill('0');
//     const cache = new Map();
//     const overlaps = Array.from({ length: n }, () => new Array(n));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j) continue;
//             let k = words[j].length;
//             for (; k > 0; k--) {
//                 const substring = words[j].substring(0, k);
//                 if (words[i].endsWith(substring)) break;
//             }
            
//             overlaps[i][j] = k;
//         }
//     }
    
//     let shortestLength = Infinity;
//     let shortestPath = [];
//     for (let i = 0; i < n; i++) {
//         used[i] = '1';
//         getShortest(words[i].length, i, 1, [i]);
//         used[i] = '0';
//     }
        
//     let result = words[shortestPath[0]];
//     for (let i = 1; i < n; i++) {
//         result += words[shortestPath[i]].substring(overlaps[shortestPath[i - 1]][shortestPath[i]]);
//     }

//     return result;
    
//     function getShortest(superString, prevWord, taken, path) {
//         if (taken === n) {
//             if (shortestLength > superString) {
//                 shortestLength = superString;
//                 shortestPath = [...path];
//             }
//             return shortestLength;
//         }
//         const key = used.join('') + superString + words[prevWord];
//         if (cache.has(key)) return cache.get(key);
        
//         let shortestForKey = Infinity;
                
//         for (let j = 0; j < n; j++) {
//             if (used[j] === '1') continue;
//             const shortestSubstring = words[j].length - overlaps[prevWord][j];
            
//             used[j] = '1';
//             path.push(j);
//             const candidate = getShortest(superString + shortestSubstring, j, taken + 1, path);
//             path.pop(j);
//             if (shortestForKey > candidate) {
//                 shortestForKey = candidate;
//             }
//             used[j] = '0';
//         }
        
//         cache.set(key, shortestForKey);
//         return shortestForKey;
//     }
// };

const shortestSuperstring = (words) => {
    const n = words.length
	// dp[i][j] -> min str building j state ending word i
    const maxString = words.join('');
	const dp = Array.from({ length: n }, () => new Array(1 << n).fill(maxString));

	for (let mask = 1; mask < (1 << n); mask++){
		for (let j = 0; j < n; j++){
			if (!(mask & (1 << j))) continue;
			if (mask === (1 << j)) dp[j][mask] = words[j];
			let prevMask = mask ^ (1 << j);
			for (let k = 0; k < n; k++) {
				if (prevMask & (1 << k)) {
					let curStr = dp[k][prevMask];
					let tempStr = curStr + getOverlapedStr(curStr, words[j]);
					if (tempStr.length < dp[j][mask].length) {
						dp[j][mask] = tempStr;
					}
				}
			}
		}
	}
	let min = Number.MAX_VALUE;
	let minStr = null;
	for (let i = 0; i < n; i++) {
		let cur = dp[i][(1 << n) - 1];
		if (cur.length < min) {
			min = cur.length;
			minStr = cur;
		}
	}

	return minStr;
    
    function getOverlapedStr(word1, word2) {
        let k = word2.length;
        for (; k > 0; k--) {
            const substring = word2.substring(0, k);
            if (word1.endsWith(substring)) break;
        }
		
		return word2.substring(k);
	}
}
