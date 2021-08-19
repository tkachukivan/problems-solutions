
/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
 function flat(arr, depth = 1) {
    if (depth === 0) return arr;
    return arr.reduce((acc, val) => {
      if (Array.isArray(val)) {
        flat(val, depth - 1).forEach(val => acc.push(val));
      } else {
        acc.push(val);
      }
  
      return acc;
    }, []);
  }
  
  const arr = [1, [2], [3, [4, [5]]]];
  
  console.log(flat(arr, 2));