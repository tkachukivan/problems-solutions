/**
 * https://leetcode.com/problems/minimum-number-of-refueling-stops/
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
// dp
// var minRefuelStops = function(target, startFuel, stations) {
//     const n = stations.length;
//     const dp = new Uint32Array(n + 1);
//     dp[0] = startFuel;
//     for (let i = 0; i < n; i++) {
//         for (let t = i; t >= 0; t--) {
//             if (dp[t] >= stations[i][0]) {
//                 dp[t + 1] = Math.max(dp[t + 1], dp[t] + stations[i][1]); // count max location we can get when refueling number of stations
//             }
//         }
//     }
    
//     for (let i = 0; i <= n; i++) { // as soon as we got target we are found min stations to refuel
//         if (dp[i] >= target) return i;
//     }
    
//     return -1;
// };

// pq
var minRefuelStops = function(target, startFuel, stations) {
    const pq = new MaxPriorityQueue({ priority: x => x })
    
    let visitedStations = 0;
    let prevStation = 0;
    let currentFuel = startFuel;
    for (let [location, fuel] of stations) {
        currentFuel -= location - prevStation;
        while (!pq.isEmpty() && currentFuel < 0) { // we don't have fuel, assume we visited station with the most fuel to refuel
            currentFuel += pq.dequeue().element;
            visitedStations++;
        }
        if (currentFuel < 0) return -1;
        pq.enqueue(fuel);
        prevStation = location;
    }
    
    currentFuel -= target - prevStation; // we may not be on target yet while visited all stations, 
    while (!pq.isEmpty() && currentFuel < 0) { // check how much fuel we still need to get to target and refuel if needed
        currentFuel += pq.dequeue().element;
        visitedStations++;
    }
    
    if (currentFuel < 0) return -1;
    
    return visitedStations;
};

// TLE
// var minRefuelStops = function(target, startFuel, stations) {    
//     const result = getMinimumRefueling(0, 0, 0, startFuel);
    
//     if (result === Infinity) return -1;
//     return result;
    
//     function getMinimumRefueling(visitedStations, distanceTraveled, nextStation, currentFuel) {
//         const maxDistance = distanceTraveled + currentFuel;
//         if (maxDistance >= target) return visitedStations;
//         const station = stations[nextStation];
//         if (!station || maxDistance < station[0]) return Infinity;
        
//         const fuelLeft = currentFuel - (station[0] - distanceTraveled);
//         const visitStation = getMinimumRefueling(
//             visitedStations + 1,
//             station[0],
//             nextStation + 1,
//             fuelLeft + station[1]
//         );
//         const notVisitStation = getMinimumRefueling(
//             visitedStations,
//             station[0],
//             nextStation + 1,
//             fuelLeft
//         );
        
//         return Math.min(visitStation, notVisitStation);
//     }
// };