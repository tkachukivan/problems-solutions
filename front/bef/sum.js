/**
 * @param {number} num
 */
 function sum(num) {
    // your code here
    function inner(anotherNum) {
      return anotherNum ? sum(num + anotherNum) : num;
    }
  
    inner.toString = function() { return num; }
  
  
    return inner;
  }
  
  const sum1 = sum(1);
  
  console.log(sum1(1) == 2, sum1(2) == 3)