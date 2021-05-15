/**
 * https://leetcode.com/problems/valid-number/
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
    let hasE = false;
    let hasDot = false;
    let hasDigit = false;
    let hasSign = false;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char >= '0' && char <= '9') {
            hasDigit = true;
        } else if (char === 'e' || char === 'E') {
            if (hasE || !hasDigit) return false;
            hasE = true;
            hasDigit = false;
            hasSign = false;
            hasDot = false;
        } else if (char === '.') {
            if (hasE || hasDot) return false;
            hasDot = true;
        } else if (char === '+' || char === '-') {
            if (hasSign || hasDigit || hasDot) return false;
            hasSign = true;
        } else {
            return false;
        }
    }
    
    return hasDigit;
};

// var isNumber = function(s) {
//     const SM = new StateMachine();
//     // Trim trailing spaces 
//     // because including spaces makes the states become too complicated.
//     const inputString = s.trim();
//     let state = 'start';

//     for (const char of s) {
//         const nextState =  SM.states[state][SM.classify(char)];
//         if (!nextState) return false;
//         state = nextState;
//     }

//     return state === 'integer' || state === 'frac' || state === 'exp_int';
// };

// class StateMachine {
//     constructor() {
//         // States store all transitions:
//         this.states = {
//             'start': {'sign':'int_sign', 'digit':'integer', 'dot':'point'},
//             'int_sign': {'digit':'integer', 'dot':'point'},
//             'integer': {'digit':'integer', 'dot':'frac', 'e':'exp'},
//             'point': {'digit':'frac'},
//             'frac': {'digit':'frac', 'e':'exp'},
//             'exp': {'digit':'exp_int', 'sign':'exp_sign'},
//             'exp_sign': {'digit':'exp_int'},
//             'exp_int': {'digit':'exp_int'}
//         }
//     }

//     /**
//      * Helper method returns the class of a char.
//      * @param {string} char 
//      * @returns {string}
//      */
//     classify(char) {
//         if (char >= '0' && char <= '9') return 'digit';
//         if (char === 'e' || char === 'E') return 'e';
//         if (char === '.') return 'dot';
//         if (char === '+' || char === '-') return 'sign';
//     }
// }