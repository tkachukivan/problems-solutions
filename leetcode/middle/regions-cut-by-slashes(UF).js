/**
 * https://leetcode.com/problems/regions-cut-by-slashes/
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const uf = unionFind(grid.length * grid.length * 4);
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            // union points which should be connected as neighbors
            if (j > 0) {
                uf.union(
                    getIndex(i, j, 3),
                    getIndex(i, j - 1, 1)
                );
            }
            if (i > 0) {
                uf.union(
                    getIndex(i, j, 0),
                    getIndex(i - 1, j, 2)
                );
            }
            // proccess array
            if (grid[i][j] !== '/') {
                uf.union(
                    getIndex(i, j, 3),
                    getIndex(i, j, 2)
                );
                uf.union(
                    getIndex(i, j, 1),
                    getIndex(i, j, 0)
                );
            }
            if (grid[i][j] !== '\\') {
                uf.union(
                    getIndex(i, j, 0),
                    getIndex(i, j, 3)
                );
                uf.union(
                    getIndex(i, j, 1),
                    getIndex(i, j, 2)
                );
            }
        }
    }
    
    return uf.getCount();
    
    
    function getIndex(i, j, part) {
        return (i * grid.length + j) * 4 + part;
    }
    
    function unionFind(size) {
        let count = size;
        const ids = new Array(count);
        for(let i = 1; i < count; i++) {
            ids[i] = i;
        }
        const sizes = ids.map(() => 1);
        const getCount = () => count;
        
        function union(p, q) {
            const pid = root(p);
            const qid = root(q);
            if (pid === qid) return; 
            if(sizes[pid] > sizes[qid]) {
                ids[qid] = pid;
                sizes[pid] += sizes[qid];
            } else {
                ids[pid] = qid;
                sizes[qid] += sizes[pid];
            }

            count--;
        }
        
        function root(i) {
            while(i !== ids[i]){
                ids[i] = ids[ids[i]]; // flatten tree
                i = ids[i];
            }
            return i;
        }
        
        return { union, getCount };
    }
};