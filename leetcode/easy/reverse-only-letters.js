/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    const n = s.length;
    const result = new Array(n);
    const stack = [];

    for (let i = 0; i < n; i++) {
        const letter = s[i];
        if ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z')) {
            stack.push(letter);
        } else {
            result[i] = letter;
        }
    }
    
    let currentIndex = 0;
    
    while (stack.length) {
        const letter = stack.pop();
        while(result[currentIndex]) { currentIndex++ }
        result[currentIndex++] = letter;
    }
    
    return result.join('');
};