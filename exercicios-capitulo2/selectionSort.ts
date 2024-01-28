function selectionSort(arr: number[]): number[] {
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

// [8, 10, 9, 7, 3, 4, 5, 6, 2, 1]
// [7, 10, 9, 8, 3, 4, 5, 6, 2, 1]
// [3, 10, 9, 8, 7, 4, 5, 6, 2, 1]
// [1, 10, 9, 8, 7, 4, 5, 6, 3, 2]
// [1, 9, 10, 8, 7, 4, 5, 6, 3, 2]
// [1, 8, 10, 9, 7, 4, 5, 6, 3, 2]
// [1, 7, 10, 9, 8, 4, 5, 6, 3, 2]
// e assim por diante...