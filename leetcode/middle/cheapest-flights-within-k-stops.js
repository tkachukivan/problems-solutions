/**
 * https://leetcode.com/problems/cheapest-flights-within-k-stops/
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
 var findCheapestPrice = function(n, flights, src, dst, k) {
    const cities = new Array(n);
    const priceToVisit = new Array(n).fill(Infinity);
    const currentStops = new Array(n).fill(Infinity);
    for (const [from, to, price] of flights) {
        if (!cities[from]) cities[from] = [];
        cities[from].push([to, price]);
    }

    const pq = new MinPriorityQueue({ priority: x => x.stops });
    pq.enqueue({ city: src, price: 0, stops: -1 });
        
    while (!pq.isEmpty()) {
        const { city, price, stops } = pq.dequeue().element;

        if (city === dst || stops >= k || !cities[city]) continue;
        
        for (const [to, priceTo] of cities[city]) {
            const currentPriceToVisit = priceToVisit[to];
            if (price + priceTo < currentPriceToVisit) {
                priceToVisit[to] = price + priceTo;
                pq.enqueue({ city: to, price: price + priceTo, stops: stops + 1 });
            } else if (stops < currentStops[to]) {
                pq.enqueue({ city: to, price: price + priceTo, stops: stops + 1 });    
            }

            currentStops[to] = stops;
        }
    }
    
    return priceToVisit[dst] === Infinity ? -1 : priceToVisit[dst];
};
