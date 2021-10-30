/**
 * https://leetcode.com/problems/two-best-non-overlapping-events/
 * @param {number[][]} events
 * @return {number}
 */
// TLE BF
// var maxTwoEvents = function(events) {
//     events.sort((a, b) => b[2] - a[2]);
//     let max = events[0][2];
    
//     for (let i = 1; i < events.length; i++) {
//         const [start1, end1, value1] = events[i];        
//         for (let j = 0; j < i; j++) {
//             const [start2, end2, value2] = events[j];
//             const sum = value1 + value2;

//             if ((end1 < start2 || end2 < start1) && sum > max) {
//                 max = sum;
//             }
//         }
//     }
    
//     return max;
// };

var maxTwoEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]);
    let max = 0;
    let result = 0;
    const pq = new MinPriorityQueue({ priority: x => x[1] });
    
    for (const event of events) {
        const [start, end, value] = event;
        while (!pq.isEmpty() && pq.front().element[1] < start) {
            max = Math.max(max, pq.dequeue().element[2]);
        }
        
        result = Math.max(result, max + value);
        
        pq.enqueue(event);
    }
    
    
    return result;
};