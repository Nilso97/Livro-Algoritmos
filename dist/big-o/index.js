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
    console.log(items[0]);
};
printFirstItem(["John", "Doe"]);
