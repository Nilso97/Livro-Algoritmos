"use strict";
function sum(arr) {
    if (arr.length === 0)
        return 0;
    return arr[0] + sum(arr.slice(1));
}
console.log(sum([2, 4, 6]));
function getTotalItems(arr) {
    if (arr.length === 0)
        return 0;
    return 1 + getTotalItems(arr.slice(1));
}
console.log(getTotalItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
let maxValue = 0;
function getMaxValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}
console.log(getMaxValue([1, 2, 3, 4, 50, 6, 7, 8, 9, 10]));
function getMaxValueWithRecursion(arr) {
    if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }
    let subMax = getMaxValueWithRecursion(arr.slice(1));
    return arr[0] > subMax ? arr[0] : subMax;
}
console.log(getMaxValueWithRecursion([1, 2, 3, 4, 50, 6, 7, 8, 9, 10]));
