/**
 * https://leetcode.com/problems/minimum-area-rectangle/
 * @param {number[][]} points
 * @return {number}
 */
// var minAreaRect = function(points) {
//     points.sort((a, b) => {
//         if (a[0] !== b[0]) return a[0] - b[0];
//         return a[1] - b[1];
//     });
    
//     const xY = new Map();
//     const yX = new Map();
//     const coordinates = new Set();
//     for (const [x, y] of points) {
//         xY.has(x) ? xY.get(x).add(y) : xY.set(x, new Set([y]));
//         yX.has(y) ? yX.get(y).add(x) : yX.set(y, new Set([x]));
//         coordinates.add(`${x}-${y}`);
//     }
    
//     let minArea = Infinity;
    
//     for (const [x, y] of points) {
//         const yPointsOnX = xY.get(x);
//         const xPointsOnY = yX.get(y);
//         yPointsOnX.delete(y);
//         xPointsOnY.delete(x);
        
//         for (const nextY of yPointsOnX) {
//             for (const nextX of xPointsOnY) {
//                 if (coordinates.has(`${nextX}-${nextY}`)) {
//                     minArea = Math.min(minArea, (nextX - x) * (nextY - y));
//                 }
//             }
//         }
//     }
    
//     return minArea === Infinity ? 0 : minArea;
// };

/**
 * @param {number[][]} points
 * @return {number}
 */
// var minAreaRect = function(points) {
//     points.sort((a, b) => {
//         if (a[0] !== b[0]) return a[0] - b[0];
//         return a[1] - b[1];
//     });
    
//     const xY = new Map();
//     const yX = new Map();
//     for (const [x, y] of points) {
//         xY.has(x) ? xY.get(x).add(y) : xY.set(x, new Set([y]));
//         yX.has(y) ? yX.get(y).add(x) : yX.set(y, new Set([x]));
//     }
    
//     let minArea = Infinity;
    
//     for (const [x, y] of points) {
//         const yPointsOnX = xY.get(x);
//         const xPointsOnY = yX.get(y);
//         yPointsOnX.delete(y);
//         xPointsOnY.delete(x);
        
//         for (const nextY of yPointsOnX) {
//             for (const nextX of xPointsOnY) {
//                 if (xY.get(nextX).has(nextY)) {
//                     minArea = Math.min(minArea, (nextX - x) * (nextY - y));
//                 }
//             }
//         }
//     }
    
//     return minArea === Infinity ? 0 : minArea;
// };

var minAreaRect = function(points) {
    const map = new Map()
    let minArea = Infinity;
    
    for(let [x, y] of points) {
        if(!map.has(x)) map.set(x, new Set());
        map.get(x).add(y);
    }
    
    for(let i = 0; i < points.length; i++) {
        
        for(let j = i+1; j < points.length; j++) {
            const [x1, y1] = points[i];
            const [x2, y2] = points[j];
            
            if(x1 == x2 || y1 == y2) continue;
            
            if(map.get(x1).has(y2) && map.get(x2).has(y1)) {
                const area = Math.abs(x1 - x2) * Math.abs(y1 - y2);
                minArea = Math.min(minArea, area);
            }
        }
    }
    return minArea === Infinity ? 0 : minArea;
};