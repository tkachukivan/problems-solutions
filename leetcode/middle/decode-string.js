/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let decoded = '';
    let i = 0;
    while (i < s.length) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            decoded += s[i++];
            continue;
        }
        let repeat = s[i];
        while (!Number.isNaN(Number(s[i + 1]))) {
            i++;
            repeat += s[i]; 
        }
        let brackets = 1;
        i += 2;
        let j = i;
        while (brackets) {
            if (s[j] === ']') brackets--;
            if (s[j] === '[') brackets++;
            j++;
        }
    
        decoded += decodeString(s.substring(i, j - 1)).repeat(Number(repeat));
        i = j;
    }
    
    return decoded;
};

// stack, cleaner
const decodeString = s => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") { stack.push(char); continue; }
    let cur = stack.pop();
    let str = '';
    while (cur !== '[') {
      str = cur + str;
      cur = stack.pop();
    }
    let num = '';
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join('');
};