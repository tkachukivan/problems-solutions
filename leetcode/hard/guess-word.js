/**
 * https://leetcode.com/problems/guess-the-word/
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
 var findSecretWord = function(wordlist, master) {
    for (let i = 0; i < 10; i++) {
        const wordToGuess = wordlist[Math.floor(Math.random() * wordlist.length)]; // random word makes increase probability
        const matches = master.guess(wordToGuess);
        if (matches === 0) {
            wordlist = wordlist.filter((word) => {
                if (wordToGuess === word) return false;
                if (getMatches(word, wordToGuess)) return false;
                return true;
            });
        } else {
            wordlist = wordlist.filter((word) => {
                if (wordToGuess === word) return false;
                return getMatches(word, wordToGuess) === matches;
            });
        }
    }
};

function getMatches(word1, word2) {
    let matches = 0;
    
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) matches++;
    }
    
    return matches;
}