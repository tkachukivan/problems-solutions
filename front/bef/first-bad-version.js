
/*
https://bigfrontend.dev/problem/first-bad-version
 type TypIsBad = (version: number) => boolean
 */

/**
 * @param {TypIsBad} isBad 
 */
function firstBadVersion(isBad) {
    // firstBadVersion receive a check function isBad
    // and should return a closure which accepts a version number(integer)
    return (version) => {
        // write your code to return the first bad version
        let left = 0;
        let right = version;
        let hasBadVersion = false;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);

            if (isBad(mid)) {
                right = mid - 1;
                hasBadVersion = true;
            } else {
                left = mid + 1;
            }
        }


        return hasBadVersion ? left : -1;
        // if none found, return -1
    }
}

console.log(firstBadVersion((num) => num > 105)(100))