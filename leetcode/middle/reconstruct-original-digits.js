/**
 * https://leetcode.com/problems/reconstruct-original-digits-from-english/
 * @param {string} s
 * @return {string}
 * can be optimized by substraction only letters which depend for digits which don't have unique letters(all odd)
 * we have "h" only in eight and three by removing from h count g-count we will get number of 3 we have and so on(3-8, 5-4, 7-6, 1-0-2-4, 9-6-8-5)
 */
 /**
 * @param {string} s
 * @return {string}
 */
const digits = [[8],[8],[7,9],[5,9],[8,6],[],[9],[],[],[]];
const uniqueAtMoment = ['z','w','x','g','u','h','f','s','o','i'];
const valuesMap = [0,2,6,8,4,3,5,7,1,9];

var originalDigits = function(s) {
    const N = 10;
    const R = 26;
    const LETTERS_SHIFT = 97;
    const resultNumberCounts = new Uint16Array(N);
    const lettersCount = new Uint16Array(R);
    for (let i = 0; i < s.length; i++) {
        lettersCount[s.charCodeAt(i) - LETTERS_SHIFT]++;
    }
    
    for (let i = 0; i < N; i++) {
        let minLetters = lettersCount[uniqueAtMoment[i].charCodeAt() - LETTERS_SHIFT];

        if (minLetters > 0 ) {
            resultNumberCounts[valuesMap[i]] = minLetters;
            for (let k of digits[i]) {
                lettersCount[uniqueAtMoment[k].charCodeAt() - LETTERS_SHIFT] -= minLetters;
            }
        }
    }

    let result = '';
    
    for (let i = 0; i < N; i++) {
        result += i.toString().repeat(resultNumberCounts[i]);
    }
    
    return result;
};