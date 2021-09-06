/**
 * https://leetcode.com/problems/slowest-key/
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let slowestTime = releaseTimes[0];
    let slowest = keysPressed[0];
    
    for (let i = 1; i < releaseTimes.length; i++) {
        const releaseTime = releaseTimes[i] - releaseTimes[i - 1];
        if (releaseTime > slowestTime) {
            slowestTime = releaseTime;
            slowest = keysPressed[i];
        } else if (releaseTime === slowestTime && slowest < keysPressed[i]) {
            slowest = keysPressed[i];  
        }
    }
    
    return slowest;
};