/**
 * https://leetcode.com/problems/maximum-performance-of-a-team/
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
// var maxPerformance = function(n, speed, efficiency, k) {
//     const modulo = BigInt(Math.pow(10, 9) + 7);
//     const engineers = [];
//     for (let i = 0; i < n; i++) {
//         engineers.push({ speed: speed[i], efficiency: efficiency[i]});
//     }
//     engineers.sort((a, b) => b.efficiency - a.efficiency);
//     const pq = new MinPriorityQueue();
//     let maxPerf = BigInt(0);
//     let speedSum = BigInt(0);
//     for (let engineer of engineers) {
//         if (pq.size() > k - 1) {
//             speedSum -= BigInt(pq.dequeue().element);
//         }
        
//         pq.enqueue(engineer.speed);
//         speedSum += BigInt(engineer.speed);
//         const perf = speedSum * BigInt(engineer.efficiency);
//         if (perf > maxPerf) maxPerf = perf;
//     }

//     return maxPerf % modulo;
// };

var maxPerformance = function(n, speed, efficiency, k) {
    let ord = Array.from({length: n}, (_,i) => i)
    ord.sort((a,b) => efficiency[b] - efficiency[a])
    let sppq = new MinPriorityQueue(),
        totalSpeed = 0n, best = 0n
    for (let eng of ord) {
        sppq.enqueue(speed[eng])
        if (sppq.size() <= k) totalSpeed += BigInt(speed[eng])
        else totalSpeed += BigInt(speed[eng] - sppq.dequeue().element)
        let res = totalSpeed * BigInt(efficiency[eng])
        if (res > best) best = res
    }
    return best % 1000000007n
};