"use strict";
function quickSort(arr) {
    let subMinorsArr = [];
    let subMajorsArr = [];
    let pivot = arr[arr.length - 1]; // último elemento do vetor
    // [ menores | maiores ]
    if (arr.length < 2)
        return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot)
            subMinorsArr.push(arr[i]);
        if (arr[i] > pivot)
            subMajorsArr.push(arr[i]);
    }
    let newArray = [
        ...quickSort(subMinorsArr),
        ...[pivot],
        ...quickSort(subMajorsArr),
    ];
    return newArray;
}
console.log(quickSort([4, 7, 2, 6, 4, 5, 9, 1, 8, 3]));
