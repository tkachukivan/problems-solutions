/**
 * https://leetcode.com/problems/course-schedule
 * for this problem it is enough to check if graph has cycle
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const g = new Array(numCourses);
    for (let v = 0; v < numCourses; v++) g[v] = [];
    
    for (let i = 0; i < prerequisites.length; i++) {
        const [a,b] = prerequisites[i];
        g[b].push(a);
    }
    
    return !hasCycle()
    
    function hasCycle() {
        const visited = new Array(numCourses);
        const recStack = new Array(numCourses);
        
        for (let v = 0; v < numCourses; v++) {
            if (dfs(v)) return true; 
        }
        
        return false;
        
        function dfs(v) {
            if (recStack[v]) return true;
            if (visited[v]) return false;
            visited[v] = true;
            recStack[v] = true;
            for (let w = 0; w < g[v].length; w++) {
                if (dfs(g[v][w])) return true;
            }

            recStack[v] = false;

            return false;
        }
    }
};