/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * https://leetcode.com/problems/flatten-nested-list-iterator/
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
// also can be done by flattening array at first or using stack
 var NestedIterator = function(nestedList) {
    this.gen = createGenerator(nestedList);
    this.current = this.gen.next();
    function* createGenerator(list) {
        for (let el of list) {
            if (el.isInteger()) yield el.getInteger();
            else yield* createGenerator(el.getList());
        }
    }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return !this.current.done;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    const value = this.current.value;
    this.current = this.gen.next();
    return value;
};
/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/