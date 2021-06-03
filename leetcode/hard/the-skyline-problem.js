/**
 * https://leetcode.com/problems/the-skyline-problem/
 * @param {number[][]} buildings
 * @return {number[][]}
 */

// does not work for all test cases probably because of PQ in js
// var getSkyline = function(buildings) {
//     let points = [];
//     buildings.forEach(([left, right, height]) => {
//         points.push([left, -height, true]);
//         points.push([right, height, false]);
//     });
//     points.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
//     const pq = new IndexedMaxPQ(points.length + 1);
//     pq.insert(0, 0);
//     const heightsCounts = {};
//     const skyline = [];
//     let prevMaxHeight = 0;
//     points.forEach(([point, height, isLeft]) => {
//         if (isLeft) {
//             if (!heightsCounts.hasOwnProperty(-height)) {
//                 heightsCounts[-height] = 0;
//             }
//             heightsCounts[-height]++;
//             pq.insert(-height, -height);
//         } else {
//             heightsCounts[height]--;
//             if (heightsCounts[height] === 0) {
//                 pq.delete(height)
//             }
//         }

//         if (prevMaxHeight !== pq.max()) {
//             prevMaxHeight = pq.max();
//             skyline.push([point, prevMaxHeight]);
//         }
//     });
    
//     return skyline;
// };

// class IndexedMaxPQ {
//     constructor(size) {
//         this.n = 0;
//         this.pq = new Array(size + 1);
//         this.qp = new Array(size + 1).fill(-1);
//         this.keys = new Array(size + 1);
//     }

//     max() {
//         return this.keys[this.pq[1]];
//     }

//     size() {
//         return this.n;
//     }

//     insert(index, value) {
//         this.n++;
//         this.qp[index] = this.n;
//         this.pq[this.n] = index;
//         this.keys[index] = value;
//         this.swim(this.n);
//     }

//     delete(i) {
//         const index = this.qp[i];
//         this.exch(index, this.n--);
//         this.swim(index);
//         this.sink(index);
//         this.keys[i] = null;
//         this.qp[i] = -1;
//     }

//     exch(i, j) {
//         const tmp = this.pq[i];
//         this.pq[i] = this.pq[j];
//         this.pq[j] = tmp;
//         this.qp[this.pq[i]] = i;
//         this.qp[this.pq[j]] = j;
//     }

//     less(i, j) {
//         return this.keys[this.pq[i]] < this.keys[this.pq[j]];
//     }

//     swim(k) {
//         let j = Math.floor(k / 2);
//         while (k > 1 && this.less(j, k)) {
//             this.exch(k, j);
//             k = j;
//             j = Math.floor(k / 2);
//         }
//     }

//     sink(k) {
//         let j = 2 * k;
//         while(j <= this.n) {
//             if (j < this.n && this.less(j, j + 1)) j++;
//             if (!this.less(k, j)) break;
//             this.exch(k, j);
//             k = j;
//             j = 2 * k;
//         }
//     }
// }

// var getSkyline = function(buildings) {
    
//     /*
//     First, register all building start/end events.
//     To distinguish them, we'll register the starts with
//     positive heights and the ends with negative heights.
//     */
    
//     const data = [];
    
//     for (let [x1, x2, h] of buildings) {
//         data.push([x1, h], [x2, -h]);
//     }
    
//     /*
//     Then, we sort the events by from leftmost to rightmost
//     x-coordinate. If there's a tie, then we pick first
//     those events with higher height
//     */
    
//     data.sort(([x1, h1], [x2, h2]) => x1 - x2 || h2 - h1);
    
    
//     /*
//     Next, we want to iterate over the events (from leftmost
//     to rightmost, since we sorted them that way) and keep
//     track of the heights we see. If it is positive, we add it;
//     if it is negative, we remove it.
    
//     We want to keep these heights sorted. This way, at any
//     given coordinate we will know which is the biggest height,
//     which is what we need to calculate our output.
    
//     Since we want to keep heights sorted, whenever we want to
//     add or remove a height we'll have to use binary search to
//     be efficient.
//     */
    
//     const heights = [];
    
//     const addHeight = (heights, h) => {
//         let left = 0;
//         let right = heights.length - 1;
        
//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);
            
//             if (heights[mid] >= h) {
//                 right = mid - 1;
//             }  else {
//                 left = mid + 1;
//             }
//         }
        
//         heights.splice(left, 0, h);
//     }
    
//     const removeHeight = (heights, h) => {
//         let left = 0;
//         let right = heights.length - 1;
        
//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);
            
//             if (heights[mid] >= h) {
//                 right = mid - 1;
//             }  else {
//                 left = mid + 1;
//             }
//         }
        
//         heights.splice(left, 1);
//     }
    
//     const answer = [];
    
//     let previousHeight = 0;
    
//     for (let [x, h] of data) {
//         if (h > 0) {
//             addHeight(heights, h);
//         } else {
//             removeHeight(heights, -h);
//         }
        
//         let currentHeight = heights[heights.length - 1] || 0;
        
//         if (currentHeight !== previousHeight) {
//             answer.push([x, currentHeight]);
//             previousHeight = currentHeight;
//         }
//     }
    
//     return answer;
// };

const getSkyline = function(buildings) {
    const points = []
  
    for (const building of buildings) {
      const [start, end, height] = building
      points.push({ x: start, y: height, isStart: true })
      points.push({ x: end, y: height, isStart: false })
    }
  
    points.sort((a, b) => {
      if (a.x !== b.x) {
        return a.x - b.x
      }
  
      // if both are starts, return tallest first
      if (a.isStart && b.isStart) {
        return b.y - a.y
      }
  
      // if both are ends, return shortest first
      if (!a.isStart && !b.isStart) {
        return a.y - b.y
      }
  
      // if a start and end overlap, return start first
      return a.isStart ? -1 : 1
    })
  
    const queue = new MaxPriorityQueue({ priority: x => x })
    queue.enqueue(0)
    let previousMax = 0
  
    const map = {}
    const results = []
  
    for (const point of points) {
      map[point.y] = 0
    }
  
    for (const point of points) {
      if (!point.isStart) {
        map[point.y] += 1
  
        // If the end point has a height less than current max height don't do anything
        // Dequeue it on the next point instead (e.g. [9, 10] in given example)
        while (!queue.isEmpty() && map[queue.front().priority] > 0) {
          map[queue.front().priority] -= 1
          queue.dequeue()
        }
      } else {
        queue.enqueue(point.y)
      }
  
      const front = queue.front().priority
  
      if (front !== previousMax) {
        results.push([point.x, front])
        previousMax = front
      }
    }
  
    return results
  }