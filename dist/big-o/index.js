"use strict";
const algorithm = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] <= 1) {
            return;
        }
    }
};
algorithm([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
const printFirstItem = (items) => {
    console.log(items[0]); // O(1)
    for (let i = 0; i < items.length; i++) { // O(n)
        console.log(items[i]);
    }
    for (let i = items.length - 1; i >= 0; i--) { // O(n)
        console.log(items[i]);
    }
};
printFirstItem(["John", "Doe", "Mike"]);
const findElementMatrix = (matrix, target) => {
    var rows = matrix.length;
    var column = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};
let existsElement = findElementMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], 10);
console.log(existsElement);
