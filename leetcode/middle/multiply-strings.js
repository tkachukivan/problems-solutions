/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    const resultA = [];
    for (let i = num2.length - 1; i >= 0; i--) {
        for (let j = num1.length - 1; j >=0; j--) {
            const num = num2[i] * num1[j];
            const index = i + j;
            if (!resultA[index]) {
                resultA[index] = []
            }
            
            addToResult(num, index)
        }
    }

    for (let i = resultA.length - 1; i >= 0; i--) {
        let sum = resultA[i].reduce((acc, val) => {
            acc = acc + +val;
            return acc;
        }, 0);
        let nextToInsert = 0;
        do {
            const currentIndexNum = sum % 10;
            sum = (sum - currentIndexNum) / 10
            const insertIndex = i - nextToInsert;
            nextToInsert++
            if (insertIndex < 0) {
                resultA.unshift(currentIndexNum)
            } else if (insertIndex < i) {
                resultA[insertIndex].push(currentIndexNum);
            } else {
                resultA[insertIndex] = currentIndexNum;
            }
        } while(sum > 0)
    }
    
    return resultA.reduce((acc, num) => acc + num, '');
    
    function addToResult(num, index) {
        if (num < 10) {
            resultA[index].push(num);
        } else {
            const currentIndexNum = num % 10;
            const prevIndexNum = (num - currentIndexNum) / 10;
            resultA[index].push(currentIndexNum);
            if (index === 0) {
                resultA.unshift([prevIndexNum])
            } else {
                if (!resultA[index - 1]) {
                    resultA[index - 1] = []
                }
                resultA[index - 1].push(prevIndexNum);
            }
            
        }
    }
};

console.log(multiply('1200', '62176'));