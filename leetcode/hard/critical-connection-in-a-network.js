/**
 * https://leetcode.com/problems/critical-connections-in-a-network/
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
 var criticalConnections = function(n, connections) {
    const graph = Array.from({ length: n }, () => []);
    const result = [];
    const ids = new Array(n);
    const minObs = new Array(n);
    let id = 1;
    for (let [a, b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }
    
    for (let i = 0; i < n; i++) {
        if (!ids[i]) {
            dfs(i);
        }
    }
    
    return result;
    
    function dfs(v, prev) {
        ids[v] = minObs[v] = id++;
        
        for (let w of graph[v]) {
            if (w === prev) continue
            if (!ids[w]) {
                dfs(w, v);
            }
            
            minObs[v] = Math.min(minObs[v], minObs[w]);
            if (minObs[w] > ids[v]) {
                result.push([v, w]);
            }
        }
    }
};