/**
 * https://leetcode.com/problems/palindrome-pairs/
 * @param {string[]} words
 * @return {number[][]}
 */
// Map
var palindromePairs = function(words) {  
    let wmap = new Map(), ans = []
    for (let i = 0; i < words.length; i++)
        wmap.set(words[i], i)
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "") {
            for (let j = 0; j < words.length; j++)
                if (isPal(words[j]) && j !== i)
                    ans.push([i, j], [j, i])
            continue
        }
        let bw = words[i].split("").reverse().join("")
        let res = wmap.get(bw)
        if (res !== undefined && res !== i)
            ans.push([i, res])
        for (let j = 1; j < bw.length; j++) {
            if (isPal(bw, 0, j - 1)) {
                let res = wmap.get(bw.slice(j))
                if (res !== undefined)
                    ans.push([i, res])
            }
            if (isPal(bw, j)) {
                let res = wmap.get(bw.slice(0,j))
                if (res !== undefined)
                    ans.push([res, i])
            }
        }
    }
    return ans
};

const isPal = (word, i=0, j=word.length-1) => {
    while (i < j)
        if (word[i++] !== word[j--]) return false
    return true
}

// Trie
// var palindromePairs = function(words) {
//     let Trie = function() {
//         this.palins = []; // palindromes after this node
//         this.next = {};
//         this.index = -1; 
//     }

//     Trie.prototype.add2Trie = function(word, index) {
//         let root = this;
//         for (let i=word.length-1;i>=0;i--) {
//             if (!root.next[word[i]]) root.next[word[i]] = new Trie(); // initialize
//             if (isPalin(word, 0, i)) root.palins.push(index);
//             root = root.next[word[i]];
//         }
//         root.index = index;
//     }

//     function searchPalin(base, trie) {
//         let output = [];
//         // case 1
//         while (base) {
//             if (trie.index >= 0 && isPalin(base, 0, base.length-1)) output.push(trie.index) // checks left over string
//             trie = trie.next[base[0]]; // move to the next node
//             if (!trie) return output;
//             base = base.slice(1);
//         }
//         // target is reversed base
//         if (trie.index >= 0) output.push(trie.index);
        
//         // case 2
//         output.push(...trie.palins);
//         return output;
//     }

//     function isPalin(word, i, j) {
//         while (i < j) if (word[i++]!=word[j--]) return false;
//         return true;
//     }

//     let trie = new Trie();
//     let res = [];
//     for (let i=0; i<words.length;i++) trie.add2Trie(words[i], i);

//     for (let i=0; i<words.length; i++) {
//         let candidates = searchPalin(words[i], trie);
//         for (let c of candidates) if (i != c) res.push([i, c]);
//     }

//     return res;
// }
// BF
// var palindromePairs = function(words) {
//     const n = words.length;
//     const result = [];
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j) continue;
//             if (isPalindrom(words[i] + words[j])) result.push([i, j]);
//         }
        // for (let j = i + 1; j < n; j++) {
        //     if (isPalindrom(words[i] + words[j])) result.push([i, j]);
        //     if (isPalindrom(words[j] + words[i])) result.push([j, i]);
        // }
//     }
    
//     return result;
    
//     function isPalindrom(word) {
//         let left = 0;
//         let right = word.length - 1;
//         while (left < right) {
//             if (word[left] !== word[right]) return false;
//             left++;
//             right--;
//         }
        
//         return true;
//     }
// };