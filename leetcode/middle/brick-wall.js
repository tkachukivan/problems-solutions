/**
 * https://leetcode.com/problems/brick-wall/
 * @param {number[][]} wall
 * @return {number}
 */
 var leastBricks = function(wall) {
    const linedUp = new Map();
    let maxLinedUp = 0;
    
    for (let i = 0; i < wall.length; i++) {
        let prev = 0;
        for (let j = 0; j < wall[i].length - 1; j++) {
            prev = wall[i][j] + prev;
            const lined = (linedUp.get(prev) || 0) + 1;
            maxLinedUp = Math.max(maxLinedUp, lined);
            linedUp.set(prev, lined);
        }
    }
    
    return wall.length - maxLinedUp;
};