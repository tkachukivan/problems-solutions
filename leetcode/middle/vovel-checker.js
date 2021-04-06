/**
 * https://leetcode.com/problems/vowel-spellchecker/
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
 var spellchecker = function(wordlist, queries) {
    const exactWords = new Map();
    const lowerCasedWords = new Map();
    const devoveledWords = new Map();
    
    for (let i = 0; i < wordlist.length; i++) {
        exactWords.set(wordlist[i], wordlist[i]);
        const lowered = wordlist[i].toLowerCase();
        if (!lowerCasedWords.has(lowered)) lowerCasedWords.set(lowered, wordlist[i]);
        
        const devoveled = devovel(lowered);
        if (!devoveledWords.has(devoveled)) devoveledWords.set(devoveled, wordlist[i]);
    }
    
    return queries.map(query => {
        if (exactWords.has(query)) return query;
        const lowered = query.toLowerCase();
        if (lowerCasedWords.has(lowered)) return lowerCasedWords.get(lowered);
        const devoveled = devovel(lowered);
        if (devoveledWords.has(devoveled)) return devoveledWords.get(devoveled);
        return '';
    });
    
    function devovel(word) {
        return word.replace(/[ouie]/g, 'a');
    }
};