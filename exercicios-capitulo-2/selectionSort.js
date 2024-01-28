"use strict";
function selectionSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let minor = arr[i];
                arr[i] = arr[j];
                arr[j] = minor;
            }
        }
    }
    return arr;
}
let selectionSortAlgorithm = selectionSort([10, 8, 9, 7, 3, 4, 5, 6, 2, 1]);
console.log(selectionSortAlgorithm);