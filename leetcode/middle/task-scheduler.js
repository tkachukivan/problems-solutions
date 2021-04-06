/**
 * https://leetcode.com/problems/task-scheduler/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const map = new Map(); // A: 3, B: 2, C: 1
    let maxFrequency = 0
    let maxFrequencyItems = 0;
    
    for (let i = 0; i < tasks.length; i++) {
        const frequency = (map.get(tasks[i]) || 0) + 1;
        map.set(tasks[i], frequency);
        
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            maxFrequencyItems = 1;
        } else if (frequency === maxFrequency) {
            maxFrequencyItems++;
        }
    }
    
    const idlePartsCount = maxFrequency - 1; // A??A??A 
    const idleSize = n - (maxFrequencyItems - 1); // ?? = n - maxFrequencyItems A: 3 B:3 C:1 -> AB?AB?AB 2 - (2 - 1)
    const idleSlots = idlePartsCount * idleSize; // A??A??A - two places with ??
    const availableTasks = tasks.length - maxFrequency * maxFrequencyItems; // tasks - (number of tasks with max Frequency) e.g. A??A??A -> 3 * 1 AB?AB?AB -> 3 * 2
    const idles = Math.max(0, idleSlots - availableTasks); // empty slots in case we have more availableTasks we will close idle slots with them, otherwise we will be left with empty slots
    
    return tasks.length + idles;
};

// this solution doing too much work and returning not optimal result e.g. 13 instead of 12 because not counting frequencies of tasks
// can be improved by adding Priority Queue which and map with counting frequencies, it will also allow to build actual list of tasks
// but this problem does not expect it to. JS will require to implement PQ(Max Heap can be used here)
//
// Java example of implementation
// public int leastInterval(char[] tasks, int n) {
//    Map<Character, Integer> map = new HashMap<>();
//    for (int i = 0; i < tasks.length; i++) {
//        map.put(tasks[i], map.getOrDefault(tasks[i], 0) + 1); // map key is TaskName, and value is number of times to be executed.
//    }
//    PriorityQueue<Map.Entry<Character, Integer>> q = new PriorityQueue<>( //frequency sort
//            (a,b) -> a.getValue() != b.getValue() ? b.getValue() - a.getValue() : a.getKey() - b.getKey());

//    q.addAll(map.entrySet());

//    int count = 0;
//    while (!q.isEmpty()) {
//        int k = n + 1;
//        List<Map.Entry> tempList = new ArrayList<>();
//        while (k > 0 && !q.isEmpty()) {
//            Map.Entry<Character, Integer> top = q.poll(); // most frequency task
//            top.setValue(top.getValue() - 1); // decrease frequency, meaning it got executed
//            tempList.add(top); // collect task to add back to queue
//            k--;
//            count++; //successfully executed task
//        }

//        for (Map.Entry<Character, Integer> e : tempList) {
//            if (e.getValue() > 0) q.add(e); // add valid tasks 
//        }

//        if (q.isEmpty()) break;
//        count = count + k; // if k > 0, then it means we need to be idle
//    }
//    return count;
// }
// var leastInterval = function(tasks, n) {
//     if (n === 0) return tasks.length;

//     const result = [tasks[0]];
//     const waiting = [];
    
//     for(let i = 1; i < tasks.length; i++) {
//         const currentTask = tasks[i];
//         const from = result.length - n >= 0 ? result.length - n : 0;
//         let taskBlocked = false;
//         for(let j = from; j < result.length && !taskBlocked; j++) {
//             if (currentTask === result[j]) taskBlocked = true;
//         }
        
//         if (taskBlocked) waiting.push(currentTask);
//         else result.push(currentTask);
        
//         let k = 0;
//         while(k < waiting.length) {
//             const waitingTask = waiting[k];
//             const from = result.length - n >= 0 ? result.length - n : 0;
//             let taskBlocked = false;

//             for(let j = from; j < result.length && !taskBlocked; j++) {
//                 if (waitingTask === result[j]) taskBlocked = true;
//             }

//             if (!taskBlocked) {
//                 result.push(waitingTask);
//                 waiting.splice(k, 1);
//                 break;
//             } else {
//                 k++;
//             }
//         }
//     }
    
//     let k = 0;
//     while(k < waiting.length) {
//         const waitingTask = waiting[k];
//         const from = result.length - n >= 0 ? result.length - n : 0;
//         let taskBlocked = false;

//         for(let j = from; j < result.length && !taskBlocked; j++) {
//             if (waitingTask === result[j]) taskBlocked = true;
//         }

//         if (!taskBlocked) {
//             result.push(waitingTask);
//             waiting.splice(k, 1);
//             k = 0;
//         } else {
//             k++;
//         }
        
//         if (waiting.length && k === waiting.length) {
//             result.push(null);
//             k = 0;
//         }
//     }
    
//     return result.length
// };