"use strict";
function quickSort(arr) {
    let subArrayMinors = [];
    let subArrayMajors = [];
    if (arr.length < 2)
        return arr;
    let pivot = arr[1]; // O pivô será o número 5
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            subArrayMinors.push(arr[i]);
        }
        if (arr[i] > pivot) {
            subArrayMajors.push(arr[i]);
        }
    }
    let newArray = [
        ...quickSort(subArrayMinors), // [3, 2, 1, 4]
        ...[pivot], // [2]
        ...quickSort(subArrayMajors), // [3, 4]
    ];
    return newArray;
}
console.log(quickSort([3, 5, 1, 2, 4]));
