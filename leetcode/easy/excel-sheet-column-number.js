/**
 * https://leetcode.com/problems/excel-sheet-column-number
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        res = res * 26 + (columnTitle.charCodeAt(i) - 64);
    }
    // let pow = 0;
    // for (let i = columnTitle.length - 1; i >= 0; i--) {
    //     res += (columnTitle.charCodeAt(i) - 64) * 26 ** pow++;
    // }
    
    return res;
};