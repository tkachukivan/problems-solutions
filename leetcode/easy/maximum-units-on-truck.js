/**
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
// var maximumUnits = function(boxTypes, truckSize) {
//     const pq = new MaxPriorityQueue({ priority: x => x[1] })
    
//     for (let boxType of boxTypes) {
//         pq.enqueue(boxType)
//     }
//     let result = 0;
    
//     while (truckSize > 0 && !pq.isEmpty()) {
//         const [numberOfBoxes, units] = pq.dequeue().element;
//         if (truckSize > numberOfBoxes) {
//             result += numberOfBoxes * units;
//         } else {
//             result += truckSize * units;
//         }
        
//         truckSize -= numberOfBoxes;
//     }
    
//     return result;
// };

var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let result = 0;
    let currentBox = 0;
    while (truckSize > 0 && currentBox < boxTypes.length) {
        const [numberOfBoxes, units] = boxTypes[currentBox];
        result += Math.min(numberOfBoxes, truckSize) * units;
        
        truckSize -= numberOfBoxes;
        currentBox++;
    }
    
    return result;
};