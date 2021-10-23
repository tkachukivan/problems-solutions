/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
// can be improved with using masks for memo or PQ with mask
var assignBikes = function(workers, bikes) {
    const usedBikes = new Array(bikes.length).fill(false);
    let smallest = Infinity;
    
    calcDistance(0, usedBikes, 0);
    
    return smallest;
    
    function calcDistance(currentWorker, usedBikes, currentDistance) {
        if (currentWorker >= workers.length) {
            smallest = Math.min(smallest, currentDistance);
            return;
        }
        if (currentDistance > smallest) return;
        
        for (let i = 0; i < bikes.length; i++) {
            if (usedBikes[i]) continue;
            let mDistance = getDistance(workers[currentWorker], bikes[i]);
            usedBikes[i] = true;
            calcDistance(currentWorker + 1, usedBikes, currentDistance + mDistance);
            usedBikes[i] = false;
        }
    }
};

function getDistance(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}