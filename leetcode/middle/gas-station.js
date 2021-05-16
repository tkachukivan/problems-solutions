/**
 * https://leetcode.com/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// O(n^2);
// var canCompleteCircuit = function(gas, cost) {
//     const n = gas.length;
//     for (let i = 0; i < n; i++) {
//         if (canTravel(i)) return i;
//     }
    
//     return -1;
    
//     function canTravel(i) {
//         let j = getNext(i);
//         let prev = i;
//         let currentGas = gas[i];

//         while(j !== i) {
//             currentGas -= cost[prev];
//             if (currentGas < 0) return false;
//             currentGas += gas[j];
//             prev = j;
//             j = getNext(j);
//         }
        
//         return currentGas >= cost[prev];
//     }
    
//     function getNext(i) {
//         if (i + 1 < n) return i + 1;
//         return 0;
//     }
// };

// O(n)
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    let total = 0;
    let tank = 0;
    let start = 0;
    
    for (let i = 0; i < n; i++) {
        total += gas[i] - cost[i];
        
        if (tank + gas[i] < cost[i]) {
            tank = 0;
            start = i + 1;
        } else {
            tank += gas[i] - cost[i];
        }
    }
    
    if (total < 0) return -1;

    return start;
};
