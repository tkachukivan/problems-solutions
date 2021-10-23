/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

 const LETTER_SHIFT = 97;

 var findAnagrams = function(s, p) {
     if (s.length < p.length) return [];
     const pCounts = new Uint32Array(26);
     const sCounts = new Uint32Array(26);
     const anagramIndexes = [];
     
     for (const letter of p) {
         pCounts[letter.charCodeAt() - LETTER_SHIFT]++;
     }
 
     for (let i = 0; i < s.length; i++) {
         sCounts[s.charCodeAt(i) - LETTER_SHIFT]++;
         
         if (i < p.length - 1) continue;
         
         const start = i - (p.length - 1);
         
         if (isAnagram()) {
             anagramIndexes.push(start);
         }
 
         sCounts[s.charCodeAt(start) - LETTER_SHIFT]--;
     }
     
     return anagramIndexes;
     
     function isAnagram() {
         return pCounts.every((count, index) => count === sCounts[index]);
     }
 };
 
 