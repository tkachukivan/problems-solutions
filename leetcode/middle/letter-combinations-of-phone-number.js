/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number
 * @param {string} digits
 * @return {string[]}
 */
 const letters = new Map();
 letters.set('2', 'abc');
 letters.set('3', 'def');
 letters.set('4', 'ghi');
 letters.set('5', 'jkl');
 letters.set('6', 'mno');
 letters.set('7', 'pqrs');
 letters.set('8', 'tuv');
 letters.set('9', 'wxyz');
 
 var letterCombinations = function(digits) {
     if (digits.length === 0) return [];
     const combinations = [];
     collectCombinations('');
     return combinations;
     
     function collectCombinations(combination) {
         if (combination.length === digits.length) {
             combinations.push(combination);
             return;
         };
         
         const numberLetters = letters.get(digits[combination.length]);
         
         for(let i = 0; i < numberLetters.length; i++) {
             collectCombinations(combination + numberLetters[i]);
         }
     }
 };