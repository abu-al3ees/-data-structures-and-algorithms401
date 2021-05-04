'use strict';
module.exports =function insertShiftArray(arr, value){
    let resultArr = [];
   if (arr.length == 0) {
        resultArr.push(value);
    } else {
        for (let index = 0; index < arr.length; index++) {
            let valueIndex = Math.ceil(arr.length / 2);
            if (index == valueIndex) {
                resultArr.push(value)
            }
            resultArr.push(arr[index])
        }
    }
    return resultArr;
}
