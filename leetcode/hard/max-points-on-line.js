/**
 * https://leetcode.com/problems/max-points-on-a-line/
 * @param {number[][]} points
 * @return {number}
 */

 var maxPoints = function(points) {
    if (points.length <2|| points == null) return points.length;
    let max = 2;
    for (let i=0;i<points.length;i++) {
        let [p1x, p1y] = points[i];
        let samePoint = 1, map = {'base':0}; // to avoid when map = {}, the max value is -Infinity
        for (let j=i+1;j<points.length;j++) {
            if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
                samePoint++;
            } else {
                let [p2x, p2y] = points[j];
                let slope = 1000000.0 * (p2y - p1y)/(p2x - p1x);
                if (!Number.isFinite(slope)) slope = "v";
                else if (Number.isNaN(slope)) slope = "h";
                map[slope] = map[slope]+1||1;
            }   
        }
        max = Math.max(Math.max(...Object.values(map))+samePoint, max);
    }
    return max;
};

// function maxPoints(points) {
//   if (points.length < 3) return points.length;
  
//   let maxLine = 0;
  
//   for (let i = 0; i < points.length; ++i) {
//     // Reset each outer loop to avoid double counting parallel slopes
//     const slopes = {};
    
//     for (let j = i + 1; j < points.length; ++j) {
//       const curSlope = slope(points[i], points[j]);
	  
// 	  // If curSlope doesn't exist, that means we need to initialize to 2 points
// 	  // since we can't have a slope with only one point
//       slopes[curSlope] = slopes[curSlope] + 1 || 2;
//       maxLine = Math.max(maxLine, slopes[curSlope]);
//     }
//   }

//   return maxLine;
// }

// function gcd(a, b) {
//   return b === 0 ? a : gcd(b, a % b);
// }

// function slope(p1, p2) {
//   let xDiff = p1[0] - p2[0];
//   let yDiff = p1[1] - p2[1];
  
//   if (xDiff === 0) return 'vertical';
//   if (yDiff === 0) return 'horizontal';
  
//   const div = gcd(xDiff, yDiff);
//   xDiff /= div;
//   yDiff /= div;
  
//   return xDiff + '/' + yDiff;
// }