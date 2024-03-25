function quickSort(arr: number[]): number[] {
  let subArrayMinors: number[] = [];
  let subArrayMajors: number[] = [];

  if (arr.length < 2) return arr;

  let pivot: number = arr[1]; // O pivô será o número 5

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      subArrayMinors.push(arr[i]);
    }
    if (arr[i] > pivot) {
      subArrayMajors.push(arr[i]);
    }
  }

  let newArray: number[] = [
    ...quickSort(subArrayMinors),
    ...[pivot],
    ...quickSort(subArrayMajors),
  ];

  return newArray;
}

console.log(quickSort([3, 5, 1, 2, 4]));
