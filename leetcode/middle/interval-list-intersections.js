/**
 * https://leetcode.com/problems/interval-list-intersections/
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    if (!firstList.length || !secondList.length) return [];
    const result = [];
    let i = 0;
    let j = 0;
    
    while (i < firstList.length && j < secondList.length) {
        // if (firstList[i][0] < secondList[j][0]) {
        //     if (firstList[i][1] >= secondList[j][0]) {
        //         result.push([secondList[j][0], Math.min(secondList[j][1], firstList[i][1])]);
        //     }
        // } else {
        //     if (secondList[j][1] >= firstList[i][0]) {
        //         result.push([firstList[i][0], Math.min(firstList[i][1], secondList[j][1])]);
        //     }
        // }
        
        const lo = Math.max(secondList[j][0], firstList[i][0]);
        const hi = Math.min(firstList[i][1], secondList[j][1]);
        if (lo <= hi) {
            result.push([lo,hi]);
        }

        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};