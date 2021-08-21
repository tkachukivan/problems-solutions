// https://bigfrontend.dev/problem/implement-Array-prototype-reduce
Array.prototype.myReduce = function (callback, acc) {
    // your code here
    const length = this.length;
    if (!callback) throw new Error('undefined is not a function');
    if (length === 0 && arguments.length === 1) throw new Error('Reduce of empty array with no initial value')
    let i = 0;
    if (arguments.length === 1) {
      acc = this[i];
      i++;
    }
  
    for (;i < length; i++) {
      acc = callback(acc, this[i], i, this)
    }
  
    return acc;
  }
  
  console.log([1,2,3].myReduce((acc, num) => acc + num));