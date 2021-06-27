/**
 * https://leetcode.com/problems/candy/
 * @param {number[]} ratings
 * @return {number}
 */
// pq
// var candy = function(ratings) {
//     const n = ratings.length;
//     const candies = new Uint32Array(n);
//     const pq = new MinPriorityQueue({ priority: x => x[0] });
//     let result = 0;

//     for (let i = 0; i < n; i++) {
//         pq.enqueue([ratings[i], i]);
//     }
    
//     while (!pq.isEmpty()) {
//         const [rating, i] = pq.dequeue().element;
//         let candy = 1;
//         if (candies[i - 1] && candies[i + 1]) {
//             if (rating > ratings[i - 1] && rating > ratings[i + 1]) {
//                 candy = Math.max(candies[i - 1], candies[i + 1]) + 1;
//             } else if (rating > ratings[i - 1]) {
//                 candy = candies[i - 1] + 1;
//             } else if (rating > ratings[i + 1]) {
//                 candy = candies[i + 1] + 1;
//             } 
//         } else if (candies[i - 1]) {
//             if (rating > ratings[i - 1]) {
//                 candy = candies[i - 1] + 1;
//             }
//         } else if (candies[i + 1]) {
//             if (rating > ratings[i + 1]) {
//                 candy = candies[i + 1] + 1;
//             }    
//         }
        
//         candies[i] = candy;
//         result += candy;
//     }

//     return result;
// };

// sortings a bit faster as no overhead for PQ and less operations overall
// var candy = function(ratings) {
//     const n = ratings.length;
//     const candies = new Uint32Array(n);
//     const indices = new Uint32Array(n);
//     let result = 0;

//     for (let i = 0; i < n; i++) {
//         indices[i] = i;
//     }
    
//     indices.sort((a, b) => ratings[a] - ratings[b]);
    
//     for (let j = 0; j < n; j++) {
//         const i = indices[j];
//         const rating = ratings[i];
//         let candy = 1;
//         if (candies[i - 1] && candies[i + 1]) {
//             if (rating > ratings[i - 1] && rating > ratings[i + 1]) {
//                 candy = Math.max(candies[i - 1], candies[i + 1]) + 1;
//             } else if (rating > ratings[i - 1]) {
//                 candy = candies[i - 1] + 1;
//             } else if (rating > ratings[i + 1]) {
//                 candy = candies[i + 1] + 1;
//             } 
//         } else if (candies[i - 1]) {
//             if (rating > ratings[i - 1]) {
//                 candy = candies[i - 1] + 1;
//             }
//         } else if (candies[i + 1]) {
//             if (rating > ratings[i + 1]) {
//                 candy = candies[i + 1] + 1;
//             }    
//         }
        
//         candies[i] = candy;
//         result += candy;
//     }

//     return result;
// };

// two pass left right, right left
var candy = function(ratings) {
    let n = ratings.length,
    leftArr = new Uint32Array(n).fill(1),
    rightArr = new Uint32Array(n).fill(1),
    candyCount = 0;
    
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftArr[i] = leftArr[i - 1] + 1;
    }
  }
    
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rightArr[i] = rightArr[i + 1] + 1;
    }
  }
    
  for (let i = 0; i < n; i++) {
    candyCount += Math.max(leftArr[i], rightArr[i]);
  }
    
  return candyCount;
};