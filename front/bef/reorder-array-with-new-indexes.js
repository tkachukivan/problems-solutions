/**
 * https://bigfrontend.dev/problem/reorder-array-with-new-indexes
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
 function sort(items, newOrder) {
    // reorder items inline
    for (let i = 0; i < items.length; i++) {
      if (newOrder[i] === null) continue;
      let currentIndex = i;
      let currentItem = items[currentIndex];
  
      while(newOrder[currentIndex] !== null) {
        const tmpItem = items[newOrder[currentIndex]];
        const tmpIndex = currentIndex;
        items[newOrder[currentIndex]] = currentItem;
        currentItem = tmpItem;
        currentIndex = newOrder[currentIndex];
        newOrder[tmpIndex] = null;
      }
    }
  }
  
  const A = ['A', 'B', 'C', 'D', 'E', 'F']
  const B = [1,   5,   4,   3,   2,   0]
  
  sort(A, B);
  console.log(A);

  function sort(items, newOrder) {
    for(let i = 0; i < newOrder.length; i++) {
     while(newOrder[i] !== i) {
       swap(items, i, newOrder[i])
       swap(newOrder, i, newOrder[i])
     }
    }
  }
  
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }