/**
 * https://leetcode.com/problems/open-the-lock/
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// var openLock = function(deadends, target) {
//     const start = '0000';
//     if (target === start) return 0;
//     const seen = new Set(deadends);
//     if (seen.has(start)) return -1;
//     seen.add(start);
//     const queue = [start];
//     let changes = 0;
    
//     while (queue.length) {
//         let size = queue.length;
//         changes++;
//         while (size) {
//             size--;
//             const code = queue.shift().split('').map(Number);
//             for (let i = 0; i < 4; i++) {
//                 const current = code[i];
//                 const up = (current + 1) % 10;
//                 const down = current === 0 ? 9 : current - 1;
//                 if (checkChange(up, i, code)) return changes;
//                 if (checkChange(down, i, code)) return changes;
//                 code[i] = current;
//             }
//         }
        
//     }
    
//     return -1;
    
//     function checkChange(newNumber, index, code) {
//         code[index] = newNumber;
//         const candidate = code.join('');
//         if (candidate === target) return true;
//         if (!seen.has(candidate)) {
//             seen.add(candidate);
//             queue.push(candidate);
//         }
        
//         return false;
//     }
// };

var openLock = function(deadends, target) {
    const start = '0000';
    if (target === start) return 0;
    const seen = new Set(deadends);
    if (seen.has(start)) return -1;
    seen.add(start);
    const queue = new Queue.Queue();
    queue.enqueue(start);
    let changes = 0;
    
    while (!queue.isEmpty()) {
        let size = queue.size();
        changes++;
        while (size) {
            size--;
            const code = queue.dequeue().split('').map(Number);
            for (let i = 0; i < 4; i++) {
                const current = code[i];
                const up = (current + 1) % 10;
                const down = current === 0 ? 9 : current - 1;
                if (checkChange(up, i, code)) return changes;
                if (checkChange(down, i, code)) return changes;
                code[i] = current;
            }
        }
        
    }
    
    return -1;
    
    function checkChange(newNumber, index, code) {
        code[index] = newNumber;
        const candidate = code.join('');
        if (candidate === target) return true;
        if (!seen.has(candidate)) {
            seen.add(candidate);
            queue.enqueue(candidate);
        }
        
        return false;
    }
};

// var openLock = function(deadends, target) {
//     if (target === "0000") return 0
//     let queue = [0], seen = new Uint8Array(10000)
//     for (let d of deadends)
//         seen[~~d] = 1
//     target = ~~target
//     if (seen[0]) return -1
//     for (let turns = 1; queue.length; turns++) {
//         let qlen = queue.length
//         for (let i = 0; i < qlen; i++) {
//             let curr = queue.shift()
//             for (let j = 1; j < 10000; j *= 10) {
//                 let mask = ~~(curr % (j * 10) / j),
//                     masked = curr - (mask * j)
//                 for (let k = 1; k < 10; k += 8) {
//                     let next = masked + (mask + k) % 10 * j
//                     if (seen[next]) continue
//                     if (next === target) return turns
//                     seen[next] = 1
//                     queue.push(next)
//                 }
//             }
//         }
//     }
//     return -1
// };