
/**
 * https://bigfrontend.dev/problem/decode-message
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    // your code here
    let result = '';
    if (message.length === 0 || message[0].length === 0) return result;

    const m = message.length;
    const n = message[0].length;
    let isDown = true;
    let i = 0;
    let j = 0;

    while (j < n) {
        result += message[i][j];
        j++;
        if (isDown) {
            if (i + 1 < m) {
                i++;
            } else {
                i--;
                isDown = false;
            }
        } else {
            if (i - 1 >= 0) {
                i--;
            } else {
                i++;
                isDown = true;
            }
        }
    }

    return result;
}

// cleaner
function decode(message) {
    // your code here
    let i = 0, j = 0, cols = message[0]?.length
    let decoded = '', step = 1

    while (j < cols) {
        decoded += message[i][j]
        if (!message[i + step]) {
            step *= -1
        }
        i += step
        j++
    }

    return decoded
}