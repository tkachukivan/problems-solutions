/**
 * https://leetcode.com/problems/course-schedule-ii
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const g = new Array(numCourses);
    for (let v = 0; v < numCourses; v++) g[v] = [];
    
    for (let i = 0; i < prerequisites.length; i++) {
        const [a,b] = prerequisites[i];
        g[b].push(a);
    }

    return getReversedPostOrder();
    
    function getReversedPostOrder() {
        const visited = new Array(numCourses);
        const recStack = new Array(numCourses);
        let courseIndex = numCourses - 1;
        let coursesOrder = [];
        let hasCycle = false;
        
        for (let v = 0; v < numCourses; v++) {
            if (dfs(v)) {
                hasCycle = true;
                break;
            }; 
        }
        
        return hasCycle ? [] : coursesOrder;
        
        function dfs(v) {
            if (recStack[v]) return true;
            if (visited[v]) return false;
            visited[v] = true;
            recStack[v] = true;
            for (let w = 0; w < g[v].length; w++) {
                if (dfs(g[v][w])) return true;
            }

            recStack[v] = false;
            coursesOrder[courseIndex] = v;
            courseIndex--;
            
            return false;
        }
    }
};