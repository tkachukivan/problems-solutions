/**
 * https://leetcode.com/problems/letter-tile-possibilities
 * @param {string} tiles
 * @return {number}
 */
// var numTilePossibilities = function(tiles) {
//     const possibilities = new Set();
//     collectPossibilities(new Array(tiles.length), '');
//     return possibilities.size - 1;
    
//     function collectPossibilities(used, possibility) {
//         possibilities.add(possibility);
        
//         if (possibility.length === tiles.length) return;
        
//         for (let i = 0; i < tiles.length; i++) {
//             const candidate = possibility + tiles[i];
//             if (!used[i] && !possibilities.has(candidate)) {
//                 used[i] = true;
//                 collectPossibilities(used, candidate);
//                 used[i] = false;
//             }
//         }
//     }
// };

var numTilePossibilities = function(tiles) {
	const counts = new Uint8Array(26);
    let possibilities = 0;
	for(let i = 0; i < tiles.length; i++) {
		counts[tiles.charCodeAt(i) - 65]++;
	}
    countPossibilities();
    
	return possibilities;
    
    function countPossibilities() {
        for(let i = 0; i < 26; i++) {
            if (counts[i] === 0) continue;
            possibilities++
            counts[i]--;
            countPossibilities();
            counts[i]++;
        }
    }
};
