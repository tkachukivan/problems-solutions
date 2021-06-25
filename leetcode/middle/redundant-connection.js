/**
 * https://leetcode.com/problems/redundant-connection/
 * @param {number[][]} edges
 * @return {number[]}
 */
// dfs
// var findRedundantConnection = function(edges) {
//     const graph = new Map();
//     for (const [from, to] of edges) {
//         if (graph.has(from)) graph.get(from).add(to);
//         else graph.set(from, new Set([to]));
        
//         if (graph.has(to)) graph.get(to).add(from)
//         else graph.set(to, new Set([from]));
//     }
    
//     let result = null;
    
//     for (const [from, to] of edges) {
//         const visited = new Set();
//         graph.get(from).delete(to);
//         graph.get(to).delete(from);
        
//         dfs(1, visited);
        
//         graph.get(from).add(to);
//         graph.get(to).add(from);
        
//         if (visited.size === edges.length) {
//             result = [from, to];
//         }
//     }
    
//     return result;
    
//     function dfs(node, visited) {
//         visited.add(node);
//         for (const nextNode of graph.get(node)) {
//             if (!visited.has(nextNode)) dfs(nextNode, visited);
//         }
//     }
// };

// optimized dfs
var findRedundantConnection = function(edges) {
    const graph = new Map();
        
    for (const edge of edges) {
        const [from, to] = edge;
        const visited = new Set();
        if (dfs(from, to, visited)) return edge;
        
        if (graph.has(from)) graph.get(from).add(to);
        else graph.set(from, new Set([to]));
        
        if (graph.has(to)) graph.get(to).add(from)
        else graph.set(to, new Set([from]));
    }
    
    return null;
    
    function dfs(from, to, visited) {
        visited.add(from);
        
        if (!graph.has(from)) return false;
        if (graph.get(from).has(to)) return true;
        
        for (const nextNode of graph.get(from)) {
            if (!visited.has(nextNode)) {
                if (dfs(nextNode, to, visited)) return true;
            }
        }
        
        return false;
    }
};

// union find
// const findRedundantConnection = edges => {
//     let dsu = new DSU();
//     // Traverse edges, returning the edge when it forms a cycle
//     for(const edge of edges) {
//         let [u, v] = edge;
//         dsu.add(u);
//         dsu.add(v);
//         if(!dsu.union(u, v)) return edge;
//     }
// };

// class DSU {
//     // Store the parent/child relationship in a map
//     constructor() {
//         this.parent = new Map();
//     }
    
//     // Add node to DSU as parent node with rank/weight 1;
//     add(val) {
//         if(!this.parent.get(val)) this.parent.set(val, -1);
//     }
    
//     // Finds the node's top most parent (When it get to a negative value)
//     find(val) {
//         let current = val;
//         while(this.parent.get(current) > 0) {
//             current = this.parent.get(current);
//         }
        
//         // Collapse - Assign the node directly to the top most parent
//         if(current !== val) this.parent.set(val, current);
//         return current;
//     }
    
//     union(u, v) {
//         // Get both node's top most parents
//         // If they're the same, a cycle exists
//         let uParent = this.find(u);
//         let vParent = this.find(v);
//         if(uParent === vParent) return false;
        
//         // Get the rank/weight of each parent
//         let uRank = this.parent[uParent];
//         let vRank = this.parent[vParent];
        
//         // The greater rank maintains being the parent (The lesser value since they're negative)
//         // The smaller rank becomes the child
//         if(uRank < vRank) {
//             this.parent[uParent] = uRank - vRank;
//             this.parent.set(vParent, uParent);
//         } else {
//             this.parent[vParent] = uRank - vRank;
//             this.parent.set(uParent, vParent);
//         }
        
//         return true;
//     }
// }