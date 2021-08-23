/**
 * https://bigfrontend.dev/problem/unique-class-name
 * @returns {string}
 */
function getUniqueClassName() {
    // your code here
    if (!getUniqueClassName.prev) {
        getUniqueClassName.prev = 'a';
        return getUniqueClassName.prev;
    }

    const symbols = getUniqueClassName.prev.split('');
    let currentItem = symbols.length - 1;
    while (currentItem >= 0) {
        let charCode = symbols[currentItem].charCodeAt();
        if ((charCode >= 97 && charCode < 122) || (charCode >= 65 && charCode < 90)) {
            charCode++;
            symbols[currentItem] = String.fromCharCode(charCode);
            break;
        } else if (charCode === 122) {
            charCode = 65;
            symbols[currentItem] = String.fromCharCode(charCode);
            break;
        } else {
            charCode = 97;
            symbols[currentItem] = String.fromCharCode(charCode);
            currentItem--;
        }
    }

    if (symbols.every(char => char === 'a')) symbols.push('a');

    getUniqueClassName.prev = symbols.join('');
    return getUniqueClassName.prev;
}

getUniqueClassName.reset = function () {
    // your code here
    getUniqueClassName.prev = null;
}

// const sequence = []
// let i = 0;
// while (i++ < 100) {
//   sequence.push(getUniqueClassName())
// }

// console.log(sequence);
function getUniqueClassName() {
    const randomChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    getUniqueClassName.pos = getUniqueClassName.pos || 1;

    var res = () => {
        let count = getUniqueClassName.pos++
        let className = '';
        while (count > 0) {
            let mod = (count - 1) % randomChars.length
            className = randomChars.charAt(mod) + className
            count = Math.floor((count - 1) / randomChars.length)
        }
        return className
    };

    return res();
}

getUniqueClassName.reset = function () {
    getUniqueClassName.pos = 0;
}

function getUniqueClassName() {
    // your code here
    getUniqueClassName.str = getUniqueClassName.str || 1
    var generateChar = () => {
        var currCharNum = getUniqueClassName.str++
        var className = ''
        while (currCharNum > 0) {
            let mod = (currCharNum - 1) % 52
            className = String.fromCharCode(mod < 26 ? (97 + mod) : (65 + (mod - 26))) + className
            currCharNum = Math.floor((currCharNum - 1) / 52)
        }
        return className

    }
    return generateChar()
}

getUniqueClassName.reset = function () {
    // your code here
    getUniqueClassName.str = 0
}